import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const t=document.querySelector(".feedback-form"),s=document.querySelector('[name="email"]'),m=document.querySelector('[name="message"]'),e={email:"",message:""},o=()=>{const a=JSON.parse(localStorage.getItem("feedback-form-state"));e.email=a.email,e.message=a.message,s.value=e.email,m.value=e.message};localStorage.length!==0&&o();const l=()=>{const a=JSON.stringify(e);localStorage.setItem("feedback-form-state",a)},r=a=>{a.target===s?e.email=a.target.value.trim():e.message=a.target.value.trim(),l()},c=a=>{if(a.preventDefault(),e.email===""||e.message===""){alert("Fill please all fields");return}console.log(e),e.email="",e.message="",localStorage.removeItem("feedback-form-state"),t.reset()};t.addEventListener("input",r);t.addEventListener("submit",c);
//# sourceMappingURL=commonHelpers2.js.map
