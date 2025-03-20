//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// Part of pcit-project.github.io, under the Apache License v2.0 with LLVM and PCIT exceptions. //
// You may not use this file except in compliance with the License.                             //
// See `https://github.com/PCIT-Project/PCIT-CPP/blob/main/LICENSE`for info.                    //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////



const Page = require("../../../Page.js").Page;
const Language = require("../../../Page.js").Language;
const html = require("../../../html.js");
const search = require("../../../search.js");


let page = new Page({
	path: "documentation/PIR/documentation.html",
	title: "PIR Documentation",
	categories: [search.Category.PIR, search.Category.DOCUMENTATION],
	description: "Documentation for PIR (Panther Intermediate Representation)",
});



page.text(`Pronounced "P I R". PIR is a compiler IR and SSA-based optimizing back-end.`, "padding-top: 2em;");

page.text(`Proper documentation for PIR does not exist yet since the PIR is very much a work in progress is likely to change in the future. To give a sneak peek into the current syntax, the following code snippets are from the output from the PIR compiler test program in version ${page.pcit_cpp_version("v0.0.89.0")}. Given that the code is just for testing, it doesn't necessarily make any sense.`);


page.text("Here's the starting code:", "padding-top: 2em;");

page.code_block(Language.PIR,
`// module: PIR testing

type &Vec2 = struct #packed {F32, F32}

const &global: I17 #linkage(internal) = I17(18)
const &string: [I8:36] #linkage(private) = "[NOT PRINTED] Hello World, I'm PIR!\\00"
const &vec2: &Vec2 #linkage(private) = {F32(12), F32(19)}

func &print_hello = ($str: Ptr) #callConv(c) #linkage(external) -> Void

func &entry = () #callConv(fast) #linkage(external) -> I64 {
	$VAL = @alloca I64
	$.1:
		$ADD_WRAP.RESULT, $ADD_WRAP.WRAPPED = @uAddWrap I64(9), I64(3)
		$ADD_WRAP.RESULT.1, $ADD_WRAP.WRAPPED.1 = @uAddWrap $ADD_WRAP.RESULT, I64(0)
		$.2, $.3 = @uAddWrap $ADD_WRAP.RESULT, I64(2)
		@store $VAL, I64(2) #atomic(release)
		$.4 = @load I64 $VAL #atomic(acquire) #volatile
		@condBranch true, $.5, $.1
	$.5:
		$.6 = @calcPtr [I8:36] I64(0), I64(14)
		@call &print_hello($.6)
		@ret $ADD_WRAP.RESULT.1
}`);



page.text("Here's the output after the optimizer runs. Note: since it's in early development it isn't as optimized as it could be:", "padding-top: 2em;");
page.code_block(Language.PIR,
`// module: PIR testing

type &Vec2 = struct #packed {F32, F32}

const &global: I17 #linkage(internal) = I17(18)
const &string: [I8:36] #linkage(private) = "[NOT PRINTED] Hello World, I'm PIR!\\00"
const &vec2: &Vec2 #linkage(private) = {F32(12), F32(19)}

func &print_hello = ($str: Ptr) #callConv(c) #linkage(external) -> Void

func &entry = () #callConv(fast) #linkage(external) -> I64 {
	$VAL = @alloca I64
	$.1:
		@store $VAL, I64(2) #atomic(release)
		@branch $.5
	$.5:
		$.6 = @calcPtr [I8:36] I64(0), I64(14)
		@call &print_hello($.6)
		@ret I64(12)
}`);



page.text("Here's the un-optimized code ouptut converted to LLVMIR:", "padding-top: 2em;");
page.code_block(Language.LLVMIR,
`; ModuleID = 'PIR testing'
source_filename = "PIR testing"
target datalayout = "e-m:w-p270:32:32-p271:32:32-p272:64:64-i64:64-i128:128-f80:128-n8:16:32:64-S128"
target triple = "x86_64-pc-windows-msvc"

%Vec2 = type <{ float, float }>

@global = internal constant i17 18, align 4
@string = private constant [36 x i8] c"[NOT PRINTED] Hello World, I'm PIR!\\00", align 1
@vec2 = private constant %Vec2 <{ float 1.200000e+01, float 1.900000e+01 }>, align 4

; Function Attrs: nounwind
declare void @print_message(ptr) #0

; Function Attrs: nounwind
define fastcc i64 @entry() #0 {
_ALLOCAS_:
  %VAL = alloca i64, align 8
  br label %.1

.1:                                               ; preds = %.1, %_ALLOCAS_
  %ADD_WRAP = call { i64, i1 } @llvm.uadd.with.overflow.i64(i64 9, i64 3)
  %ADD_WRAP.RESULT = extractvalue { i64, i1 } %ADD_WRAP, 0
  %ADD_WRAP.WRAPPED = extractvalue { i64, i1 } %ADD_WRAP, 1
  %ADD_WRAP1 = call { i64, i1 } @llvm.uadd.with.overflow.i64(i64 %ADD_WRAP.RESULT, i64 0)
  %ADD_WRAP.RESULT.1 = extractvalue { i64, i1 } %ADD_WRAP1, 0
  %ADD_WRAP.WRAPPED.1 = extractvalue { i64, i1 } %ADD_WRAP1, 1
  %ADD_WRAP2 = call { i64, i1 } @llvm.uadd.with.overflow.i64(i64 %ADD_WRAP.RESULT, i64 2)
  %.2 = extractvalue { i64, i1 } %ADD_WRAP2, 0
  %.3 = extractvalue { i64, i1 } %ADD_WRAP2, 1
  store atomic i64 2, ptr %VAL release, align 8
  %.4 = load atomic volatile i64, ptr %VAL acquire, align 8
  br i1 true, label %.5, label %.1

.5:                                               ; preds = %.1
  %.6 = getelementptr inbounds [36 x i8], ptr @string, i32 0, i32 14
  call void @print_message(ptr %.6)
  ret i64 %ADD_WRAP.RESULT.1
}

; Function Attrs: nocallback nofree nosync nounwind speculatable willreturn memory(none)
declare { i64, i1 } @llvm.uadd.with.overflow.i64(i64, i64) #1

attributes #0 = { nounwind }
attributes #1 = { nocallback nofree nosync nounwind speculatable willreturn memory(none) }`);



page.text("Here's the un-optimized code ouptut converted to x86-64 assembly (Intel):", "padding-top: 2em;");
page.code_block(Language.ASM_x86,
`	.text
	.def    @feat.00;
	.scl    3;
	.type   0;
	.endef
	.globl  @feat.00
.set @feat.00, 0
	.intel_syntax noprefix
	.file   "PIR testing"
	.def    entry;
	.scl    2;
	.type   32;
	.endef
	.globl  entry
	.p2align	4, 0x90
entry:
	sub     rsp, 56
.LBB0_1:
	mov 	eax, 12
	mov 	qword ptr [rsp + 40], rax
	mov 	qword ptr [rsp + 48], 2
	mov 	rax, qword ptr [rsp + 48]
	mov 	al, 1
	test 	al, 1
	jne 	.LBB0_2
	jmp 	.LBB0_1
.LBB0_2:
	lea 	rcx, [rip + .Lstring]
	add 	rcx, 14
	call 	print_message
	mov 	rax, qword ptr [rsp + 40]
	add 	rsp, 56
	ret

	.section	.rdata,"dr"
	.p2align	2, 0x0
global:
	.short  18
	.byte   0
	.zero   1

.Lstring:
	.asciz  "[NOT PRINTED] Hello World, I'm PIR!"

	.p2align	2, 0x0
.Lvec2:
	.long   0x41400000
	.long   0x41980000`);


page.text("Here's the output when run through the JIT:", "padding-top: 2em;");
page.code_block(Language.Terminal,
`Message: "Hello World, I'm PIR!"
value returned from entry: 12`);




page.generate();

