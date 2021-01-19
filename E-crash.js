console.warn("user has requested crash!")
answer = prompt("Are you sure you want to crash? y/n")
if(answer == "y")
{
  console.log("user accepted crash")
  document.write("Webpage has crashed successfully ")
  while(true)
  {
    console.log("CRASH")
  }
}else
{
  console.error("user has declined to initiate crash.")
}