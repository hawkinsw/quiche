(function() {
    var type_impls = Object.fromEntries([["buffer_pool",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Pooled%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/buffer_pool/lib.rs.html#75\">Source</a><a href=\"#impl-Debug-for-Pooled%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"buffer_pool/trait.Reuse.html\" title=\"trait buffer_pool::Reuse\">Reuse</a> + 'static&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"buffer_pool/struct.Pooled.html\" title=\"struct buffer_pool::Pooled\">Pooled</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/buffer_pool/lib.rs.html#75\">Source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","buffer_pool::raw_pool_buf_io::PooledBuf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deref-for-Pooled%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/buffer_pool/lib.rs.html#187-193\">Source</a><a href=\"#impl-Deref-for-Pooled%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"buffer_pool/trait.Reuse.html\" title=\"trait buffer_pool::Reuse\">Reuse</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"buffer_pool/struct.Pooled.html\" title=\"struct buffer_pool::Pooled\">Pooled</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Target\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/buffer_pool/lib.rs.html#188\">Source</a><a href=\"#associatedtype.Target\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html#associatedtype.Target\" class=\"associatedtype\">Target</a> = T</h4></section></summary><div class='docblock'>The resulting type after dereferencing.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.deref\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/buffer_pool/lib.rs.html#190-192\">Source</a><a href=\"#method.deref\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html#tymethod.deref\" class=\"fn\">deref</a>(&amp;self) -&gt; &amp;Self::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html#associatedtype.Target\" title=\"type core::ops::deref::Deref::Target\">Target</a></h4></section></summary><div class='docblock'>Dereferences the value.</div></details></div></details>","Deref","buffer_pool::raw_pool_buf_io::PooledBuf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-DerefMut-for-Pooled%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/buffer_pool/lib.rs.html#195-199\">Source</a><a href=\"#impl-DerefMut-for-Pooled%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"buffer_pool/trait.Reuse.html\" title=\"trait buffer_pool::Reuse\">Reuse</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"buffer_pool/struct.Pooled.html\" title=\"struct buffer_pool::Pooled\">Pooled</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deref_mut\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/buffer_pool/lib.rs.html#196-198\">Source</a><a href=\"#method.deref_mut\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html#tymethod.deref_mut\" class=\"fn\">deref_mut</a>(&amp;mut self) -&gt; &amp;mut Self::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html#associatedtype.Target\" title=\"type core::ops::deref::Deref::Target\">Target</a></h4></section></summary><div class='docblock'>Mutably dereferences the value.</div></details></div></details>","DerefMut","buffer_pool::raw_pool_buf_io::PooledBuf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Drop-for-Pooled%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/buffer_pool/lib.rs.html#87-108\">Source</a><a href=\"#impl-Drop-for-Pooled%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"buffer_pool/trait.Reuse.html\" title=\"trait buffer_pool::Reuse\">Reuse</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"buffer_pool/struct.Pooled.html\" title=\"struct buffer_pool::Pooled\">Pooled</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.drop\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/buffer_pool/lib.rs.html#88-107\">Source</a><a href=\"#method.drop\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html#tymethod.drop\" class=\"fn\">drop</a>(&amp;mut self)</h4></section></summary><div class='docblock'>Executes the destructor for this type. <a href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html#tymethod.drop\">Read more</a></div></details></div></details>","Drop","buffer_pool::raw_pool_buf_io::PooledBuf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Pooled%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/buffer_pool/lib.rs.html#81-85\">Source</a><a href=\"#impl-Pooled%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"buffer_pool/trait.Reuse.html\" title=\"trait buffer_pool::Reuse\">Reuse</a>&gt; <a class=\"struct\" href=\"buffer_pool/struct.Pooled.html\" title=\"struct buffer_pool::Pooled\">Pooled</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.into_inner\" class=\"method\"><a class=\"src rightside\" href=\"src/buffer_pool/lib.rs.html#82-84\">Source</a><h4 class=\"code-header\">pub fn <a href=\"buffer_pool/struct.Pooled.html#tymethod.into_inner\" class=\"fn\">into_inner</a>(self) -&gt; T</h4></section></div></details>",0,"buffer_pool::raw_pool_buf_io::PooledBuf"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[8385]}