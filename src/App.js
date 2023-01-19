import './App.css';

function App() {
  return (
    <div class="h-auto">
    <div class='bg-info text-white'>
      <h1 class='py-2 ps-4'>Contact Form</h1>
    </div>
    <form class='w-75 ms-3 h-auto mt-3'>
    <div class="row">
    <label for="inputName" class="form-label fw-bold">Full Name<span class="text-danger ms-1">*</span></label>
  <div class="col">
    <input type="text" class="form-control" placeholder="First name" aria-label="First name" id="inputName" required></input>
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" id='inputName' required></input>
  </div>
    </div>
    <div class='my-3'>
      <label for="inputEmail" class="form-label fw-bold">Email<span class="text-danger ms-1">*</span></label>
      <input type="email" class="form-control" id="inputEmail" required></input>
    </div>
    <div>
      <label for="inputcomment" class="form-label fw-bold">Leave us a few words<span class="text-danger ms-1">*</span></label>
      <textarea class="form-control" id="inputcomment"></textarea>
    </div>
    <div class='d-flex justify-content-center'>
    <button class='btn btn-success mt-5'>Submit</button>
    </div>
    </form>
    </div>
  )
}

export default App;
