
export default function Login() {
  
  function HandlerAlert() {
    console.log("Hola")
  }
 
  return (

    <main className="flex min-h-screen flex justify-center bg-white text-neutral-900">
      
      <div className="mt-36">
        <h1 className="text-3xl font-semibold">Log in</h1>
        <p className="text-neutral-600 flex text-center text-sm">Login now for tried it</p>
        <form action="" className="mt-12 block">
          <input type="text" name="" id="" placeholder="Email" className="bg-neutral-200 p-[5px] rounded-[15px]"/>
          <input type="password" name="" id="" placeholder="Password" className="bg-neutral-200 p-[5px] rounded-[15px] mx-6"/>
          <input type="button" value="Submit" className="bg-neutral-200 p-[5px] rounded-[15px] mx-[10px]"/>
        </form>
        <p className="text-neutral-600 flex text-center text-sm mt-6">I dont't have account</p>
        <a href="/register" className="text-blue-500 text-sm">Yet</a>
      </div>
      
      
    </main>
  );
}
