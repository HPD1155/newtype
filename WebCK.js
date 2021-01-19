function check(rend, crash)
{
  var crash_handler = 0
  var render_check = 5;
  console.warn("check");
  console.log("Loading cache...")
  var crash_handler = crash
  if(crash_handler == crash)
  {
    console.log("No crashes")
  } else
  {
    document.write("WebPage has crashed due to an unexpected problem!")
  }
  var render_check = rend;
  if(render_check == rend)
  {
    console.log("GPU and CPU good for website")
  }else {
    alert("You don't have a good enough graphics card and/or cpu for the website!")
    console.error("You don't have a good enough graphics card and/or cpu for the website!")
  }
}