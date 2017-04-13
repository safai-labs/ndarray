(function() {var implementors = {};
implementors["ndarray"] = ["impl&lt;A, S, S2, D, E&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Rem.html' title='core::ops::Rem'>Rem</a>&lt;<a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S2, E&gt;&gt; for <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt; <span class='where fmt-newline'>where A: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Rem.html' title='core::ops::Rem'>Rem</a>&lt;A, Output=A&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;S: <a class='trait' href='ndarray/trait.DataOwned.html' title='ndarray::DataOwned'>DataOwned</a>&lt;Elem=A&gt; + <a class='trait' href='ndarray/trait.DataMut.html' title='ndarray::DataMut'>DataMut</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;S2: <a class='trait' href='ndarray/trait.Data.html' title='ndarray::Data'>Data</a>&lt;Elem=A&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;E: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>","impl&lt;'a, A, S, S2, D, E&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Rem.html' title='core::ops::Rem'>Rem</a>&lt;&amp;'a <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S2, E&gt;&gt; for <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt; <span class='where fmt-newline'>where A: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Rem.html' title='core::ops::Rem'>Rem</a>&lt;A, Output=A&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;S: <a class='trait' href='ndarray/trait.DataMut.html' title='ndarray::DataMut'>DataMut</a>&lt;Elem=A&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;S2: <a class='trait' href='ndarray/trait.Data.html' title='ndarray::Data'>Data</a>&lt;Elem=A&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;E: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>","impl&lt;'a, 'b, A, S, S2, D, E&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Rem.html' title='core::ops::Rem'>Rem</a>&lt;&amp;'a <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S2, E&gt;&gt; for &amp;'b <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt; <span class='where fmt-newline'>where A: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Rem.html' title='core::ops::Rem'>Rem</a>&lt;A, Output=A&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;S: <a class='trait' href='ndarray/trait.Data.html' title='ndarray::Data'>Data</a>&lt;Elem=A&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;S2: <a class='trait' href='ndarray/trait.Data.html' title='ndarray::Data'>Data</a>&lt;Elem=A&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;E: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>","impl&lt;A, S, D, B&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Rem.html' title='core::ops::Rem'>Rem</a>&lt;B&gt; for <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt; <span class='where fmt-newline'>where A: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Rem.html' title='core::ops::Rem'>Rem</a>&lt;B, Output=A&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;S: <a class='trait' href='ndarray/trait.DataOwned.html' title='ndarray::DataOwned'>DataOwned</a>&lt;Elem=A&gt; + <a class='trait' href='ndarray/trait.DataMut.html' title='ndarray::DataMut'>DataMut</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: <a class='trait' href='ndarray/trait.ScalarOperand.html' title='ndarray::ScalarOperand'>ScalarOperand</a></span>","impl&lt;'a, A, S, D, B&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Rem.html' title='core::ops::Rem'>Rem</a>&lt;B&gt; for &amp;'a <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt; <span class='where fmt-newline'>where A: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Rem.html' title='core::ops::Rem'>Rem</a>&lt;B, Output=A&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;S: <a class='trait' href='ndarray/trait.Data.html' title='ndarray::Data'>Data</a>&lt;Elem=A&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: <a class='trait' href='ndarray/trait.ScalarOperand.html' title='ndarray::ScalarOperand'>ScalarOperand</a></span>","impl&lt;S, D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Rem.html' title='core::ops::Rem'>Rem</a>&lt;<a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i8.html'>i8</a> <span class='where fmt-newline'>where S: <a class='trait' href='ndarray/trait.DataOwned.html' title='ndarray::DataOwned'>DataOwned</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i8.html'>i8</a>&gt; + <a class='trait' href='ndarray/trait.DataMut.html' title='ndarray::DataMut'>DataMut</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>","impl&lt;'a, S, D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Rem.html' title='core::ops::Rem'>Rem</a>&lt;&amp;'a <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i8.html'>i8</a> <span class='where fmt-newline'>where S: <a class='trait' href='ndarray/trait.Data.html' title='ndarray::Data'>Data</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i8.html'>i8</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>","impl&lt;S, D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Rem.html' title='core::ops::Rem'>Rem</a>&lt;<a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u8.html'>u8</a> <span class='where fmt-newline'>where S: <a class='trait' href='ndarray/trait.DataOwned.html' title='ndarray::DataOwned'>DataOwned</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u8.html'>u8</a>&gt; + <a class='trait' href='ndarray/trait.DataMut.html' title='ndarray::DataMut'>DataMut</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>","impl&lt;'a, S, D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Rem.html' title='core::ops::Rem'>Rem</a>&lt;&amp;'a <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u8.html'>u8</a> <span class='where fmt-newline'>where S: <a class='trait' href='ndarray/trait.Data.html' title='ndarray::Data'>Data</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u8.html'>u8</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>","impl&lt;S, D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Rem.html' title='core::ops::Rem'>Rem</a>&lt;<a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i16.html'>i16</a> <span class='where fmt-newline'>where S: <a class='trait' href='ndarray/trait.DataOwned.html' title='ndarray::DataOwned'>DataOwned</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i16.html'>i16</a>&gt; + <a class='trait' href='ndarray/trait.DataMut.html' title='ndarray::DataMut'>DataMut</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>","impl&lt;'a, S, D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Rem.html' title='core::ops::Rem'>Rem</a>&lt;&amp;'a <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i16.html'>i16</a> <span class='where fmt-newline'>where S: <a class='trait' href='ndarray/trait.Data.html' title='ndarray::Data'>Data</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i16.html'>i16</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>","impl&lt;S, D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Rem.html' title='core::ops::Rem'>Rem</a>&lt;<a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u16.html'>u16</a> <span class='where fmt-newline'>where S: <a class='trait' href='ndarray/trait.DataOwned.html' title='ndarray::DataOwned'>DataOwned</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u16.html'>u16</a>&gt; + <a class='trait' href='ndarray/trait.DataMut.html' title='ndarray::DataMut'>DataMut</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>","impl&lt;'a, S, D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Rem.html' title='core::ops::Rem'>Rem</a>&lt;&amp;'a <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u16.html'>u16</a> <span class='where fmt-newline'>where S: <a class='trait' href='ndarray/trait.Data.html' title='ndarray::Data'>Data</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u16.html'>u16</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>","impl&lt;S, D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Rem.html' title='core::ops::Rem'>Rem</a>&lt;<a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i32.html'>i32</a> <span class='where fmt-newline'>where S: <a class='trait' href='ndarray/trait.DataOwned.html' title='ndarray::DataOwned'>DataOwned</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i32.html'>i32</a>&gt; + <a class='trait' href='ndarray/trait.DataMut.html' title='ndarray::DataMut'>DataMut</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>","impl&lt;'a, S, D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Rem.html' title='core::ops::Rem'>Rem</a>&lt;&amp;'a <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i32.html'>i32</a> <span class='where fmt-newline'>where S: <a class='trait' href='ndarray/trait.Data.html' title='ndarray::Data'>Data</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i32.html'>i32</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>","impl&lt;S, D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Rem.html' title='core::ops::Rem'>Rem</a>&lt;<a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u32.html'>u32</a> <span class='where fmt-newline'>where S: <a class='trait' href='ndarray/trait.DataOwned.html' title='ndarray::DataOwned'>DataOwned</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u32.html'>u32</a>&gt; + <a class='trait' href='ndarray/trait.DataMut.html' title='ndarray::DataMut'>DataMut</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>","impl&lt;'a, S, D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Rem.html' title='core::ops::Rem'>Rem</a>&lt;&amp;'a <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u32.html'>u32</a> <span class='where fmt-newline'>where S: <a class='trait' href='ndarray/trait.Data.html' title='ndarray::Data'>Data</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u32.html'>u32</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>","impl&lt;S, D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Rem.html' title='core::ops::Rem'>Rem</a>&lt;<a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i64.html'>i64</a> <span class='where fmt-newline'>where S: <a class='trait' href='ndarray/trait.DataOwned.html' title='ndarray::DataOwned'>DataOwned</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i64.html'>i64</a>&gt; + <a class='trait' href='ndarray/trait.DataMut.html' title='ndarray::DataMut'>DataMut</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>","impl&lt;'a, S, D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Rem.html' title='core::ops::Rem'>Rem</a>&lt;&amp;'a <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i64.html'>i64</a> <span class='where fmt-newline'>where S: <a class='trait' href='ndarray/trait.Data.html' title='ndarray::Data'>Data</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i64.html'>i64</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>","impl&lt;S, D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Rem.html' title='core::ops::Rem'>Rem</a>&lt;<a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u64.html'>u64</a> <span class='where fmt-newline'>where S: <a class='trait' href='ndarray/trait.DataOwned.html' title='ndarray::DataOwned'>DataOwned</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u64.html'>u64</a>&gt; + <a class='trait' href='ndarray/trait.DataMut.html' title='ndarray::DataMut'>DataMut</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>","impl&lt;'a, S, D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Rem.html' title='core::ops::Rem'>Rem</a>&lt;&amp;'a <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u64.html'>u64</a> <span class='where fmt-newline'>where S: <a class='trait' href='ndarray/trait.Data.html' title='ndarray::Data'>Data</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u64.html'>u64</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>","impl&lt;S, D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Rem.html' title='core::ops::Rem'>Rem</a>&lt;<a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.f32.html'>f32</a> <span class='where fmt-newline'>where S: <a class='trait' href='ndarray/trait.DataOwned.html' title='ndarray::DataOwned'>DataOwned</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.f32.html'>f32</a>&gt; + <a class='trait' href='ndarray/trait.DataMut.html' title='ndarray::DataMut'>DataMut</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>","impl&lt;'a, S, D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Rem.html' title='core::ops::Rem'>Rem</a>&lt;&amp;'a <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.f32.html'>f32</a> <span class='where fmt-newline'>where S: <a class='trait' href='ndarray/trait.Data.html' title='ndarray::Data'>Data</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.f32.html'>f32</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>","impl&lt;S, D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Rem.html' title='core::ops::Rem'>Rem</a>&lt;<a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.f64.html'>f64</a> <span class='where fmt-newline'>where S: <a class='trait' href='ndarray/trait.DataOwned.html' title='ndarray::DataOwned'>DataOwned</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.f64.html'>f64</a>&gt; + <a class='trait' href='ndarray/trait.DataMut.html' title='ndarray::DataMut'>DataMut</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>","impl&lt;'a, S, D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Rem.html' title='core::ops::Rem'>Rem</a>&lt;&amp;'a <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.f64.html'>f64</a> <span class='where fmt-newline'>where S: <a class='trait' href='ndarray/trait.Data.html' title='ndarray::Data'>Data</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.f64.html'>f64</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
