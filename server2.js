<div style={{padding:"5px"}}>         
<div class="row">
 <div class="col-md-3"></div>
 <div class='col-md-6' >
 <AttendenceRegisterNav/><p></p>
 <div class="pageLabel" >{registerTitle}</div>
 <div style={{fontSize:"15px"}}>{messageesNumb} contacts <span style={{paddingLeft:"10px"}}>ID: {registerParams.id}</span></div>

              
         
              
   <div  style={{paddingTop:"20px"}}>  
 
<form id="messengingForm" >
<div class="bold">Save a contact</div>
<div class="light">Enter a name (optional) and contact then save.</div>
<p></p>

<div class="mb-3">
<div class="formInputLabel">Name (optional)</div>
<textarea row="2" type="text" class="form-control" autoComplete="off" name="name" ></textarea><br></br>
<div class="formInputLabel">Contact</div>
<input type="text" class="form-control" autoComplete="off" name="contact"></input>
</div>
<div class="row">

<div>

<div class="status">{status}</div>
<div style={{padding:"3px"}}>
<div onClick={()=>{
let name;
if(Array.from(document.getElementById('messengingForm').contact.value.trim()).length<10||Array.from(document.getElementById('messengingForm').contact.value.trim()).length>10){
ToastAlert('toastAlert2','Enter contact of 10 digits',3000)
document.getElementById('messengingForm').contact.value=""
}
else{
if(Array.from(document.getElementById('messengingForm').name.value).length<2){
name=""
}else{
name=document.getElementById('messengingForm').name.value.trim()
}
setStatus('Saving.......')
fetch(`/getTradingDetails/${registrarContact}`).then(res=>res.json()).then(resp=>{
let traderDetailsObj=resp[0]
fetch(`/addToAttendeesRegister`,{
method:"post",
headers:{"Content-type":"application/json"},
body:JSON.stringify({name:name,contact:parseInt(document.getElementById('messengingForm').contact.value.trim()),registrarContact:registrarContact,registerId:parseInt(registerParams.id)})
}).then(res=>res.json()).then(res=>{

if(res.registerPresent===0){
ToastAlert('toastAlert2','Register does not exist',3000)


}
else{
if(res.success===1){
ToastAlert('toastAlert1','Saved',1200)
setStatus('')
document.getElementById('messengingForm').contact.value=""
document.getElementById('messengingForm').name.value=""
setMessageesNumb(res.attendees.length)
}else if(res.success==='memberPresent'){
ToastAlert('toastAlert2','Contact already exists',3000)
document.getElementById('messengingForm').contact.value=""
document.getElementById('messengingForm').name.value=""

}else {
ToastAlert('toastAlert2','Error occured, try again',3000)
}
}




})










 })









}


}}type="text" class="btn btn-success fullButtonWidth"><span class="fa fa-save"></span> Save</div>
</div>


<div style={{padding:"3px"}}>
<Link to={`/pages/sendsmsattendanceregs/${registerParams.registrar}/${registerParams.id}`}>
<div class="btn btn-success fullButtonWidth">Send SMS <span class="fa fa-paper-plane"></span></div>
</Link>


</div>
<p></p>
<div style={{display:"flex",flexWrap:"wrap"}}>

<div style={{padding:"3px"}}>
<div onClick={()=>{
DisplayContacts(registerParams)
}}type="text" class="button1"><span class="fa fa-eye"></span> Display contacts</div>
</div>

<div style={{padding:"3px"}}>
<div onClick={()=>{

if(Array.from(document.getElementById('messengingForm').contact.value.trim()).length<10||Array.from(document.getElementById('messengingForm').contact.value.trim()).length>10){
ToastAlert('toastAlert2','Enter contact of 10 digits',3000)
document.getElementById('messengingForm').contact.value=""
}else{
setStatus('Deleting...........')
fetch('/removeFromAttendeesRegister',{
method:"post",
headers:{"Content-type":"application/json"},
body:JSON.stringify({contact:parseInt(document.getElementById('messengingForm').contact.value.trim()),registrarContact:registrarContact,registerId:parseInt(registerParams.id)})
}).then(res=>res.json()).then(res=>{
if(res.registerPresent===0){
setStatus2(`<div style='color:red;'>You can not proceed with the action because the Regsiter is not present</div>`)

}else{

if(res.attendeeInList===0){
ToastAlert('toastAlert2','not in the list',3000)
}else{
if(res.success===1){
ToastAlert('toastAlert1','Deleted',1200)
setStatus('')
document.getElementById('messengingForm').contact.value=''
setMessageesNumb(messageesNumb-1)
}else{
ToastAlert('toastAlert1','Error occured, try again',3000)
document.getElementById('messengingForm').contact.value=''

}


}

}

})
}
}}type="text" class="button1"><span class="fa fa-trash"></span> Delete contact</div>
</div>
<div style={{padding:"3px"}}>
<div onClick={()=>{
if(Array.from(document.getElementById('messengingForm').contact.value.trim()).length<10||Array.from(document.getElementById('messengingForm').contact.value.trim()).length>10){
ToastAlert('toastAlert2','Enter contact of 10 digits',3000)
document.getElementById('messengingForm').contact.value=""
}
else{

if(arrayOfAttendees.length===0){
ToastAlert('toastAlert2','Register not ready, try again',3000)
}else{
let index=0,position,details,contact=parseInt(document.getElementById('messengingForm').contact.value)
arrayOfAttendees.forEach(attendeeDoc=>{

if(attendeeDoc.contact===contact){

position=index+1
details=attendeeDoc
}else{

}

index++
})
if(position===undefined){
ToastAlert('toastAlert2','Not in the list',3000)
}else{
ToastAlert('toastAlert1',`${details.name} at position ${position} in the list`,4000)

}


}
}


}}type="text" class="button1"> Get details</div>
</div>



</div>
</div>

</div>
</form>

<div style={{background:"#e9e8e8",paddingTop:"5px"}}>
<div style={{fontSize:"17px",textAlign:"center",color:"black",fontWeight:"600",background:"white"}} dangerouslySetInnerHTML={{__html:numberOfContacts}}/>

<div>{messagees}</div>

</div>

</div>

</div>
<div class="col-md-3"></div>

<div class="col-md-3"></div>
{/* <div class='col-md-6'>  
<div style={{padding:"10px"}}><div style={{color:"red",fontSize:"20px",textAlign:"center",paddingTop:"20px",borderBottom:"1px solid red"}}>Below is for only the Admin</div></div>
<div class="pageLabel">Share a contact to another register</div>
<div class="pageDescription">Send a contact from this register to another register. To send, enter the ID of the register to send to and enter the position that contact holds in this register</div><p></p>
<form id="sendContactToRegister" >
<div style={{paddingBottom:"8px"}}><div class="formLabel">Share a contact to another register</div></div>
<div style={{paddingBottom:"5px"}}>Only for the Register Admin, {registrarName} </div>
<div style={{paddingTop:"5px"}}>Sending to: <span style={{padding:"5px"}} dangerouslySetInnerHTML={{__html:sendToContactRegisterName}}/> </div>
<div class="mb-3">
<input type="hidden" class="form-control" autoComplete="off" name="registrarContact" defaultValue={registrarContact} ></input>
<div class="formInputLabel">Enter the ID of the register to send to:</div>
<input type="text" class="form-control" autoComplete="off" name="registerId"  
onChange={
()=>{

setSendToContactRegisterName('Searching for register.........')
fetch('/getAttendanceRegDetails',{
method:"post",
headers:{'Content-type':'application/json'},
body:JSON.stringify({
registrarContact:registrarContact,
registerId:parseInt(document.getElementById("sendContactToRegister").registerId.value),


}) 
}).then(res=>res.json()).then(resp=>{
if(resp.length===0){
ToastAlert('toastAlert2','You have no register with that ID',3000)
}else{
setSendToContactRegisterName(`${resp[0].registerTitle}`)
ToastAlert('toastAlert1',`Sending to ${resp[0].registerTitle} `,4000)

}
})
}
}></input> <br></br>
<div class="formInputLabel">Position of the contact in this register (e.g. 1,2,3,...)</div>
<input type="text" class="form-control" autoComplete="off" name="contactPosition" ></input> 
</div>

<div style={{padding:"5px",fontSize:"15px"}} dangerouslySetInnerHTML={{__html:sendToContactRegisterStatus}}/>

<div onClick={()=>{

if(IsLoggedIn(cookies)===true){
if(parseInt(document.getElementById("sendContactToRegister").contactPosition.value)==='NaN'){
ToastAlert('toastAlert2','Enter a position corresponding to a contact e.g 1,2,3,....',3000)
}else{

let contactPosition=parseInt(document.getElementById("sendContactToRegister").contactPosition.value)
if(contactPosition<1){
ToastAlert('toastAlert2','Position can not be less than 1',3000)
}else{

let attendeeDoc=arrayOfAttendees[contactPosition-1]

if(attendeeDoc===undefined){
 ToastAlert('toastAlert2',`Refresh the page to update OR position ${document.getElementById("sendContactToRegister").contactPosition.value} does not exist in this register`,7000)
 
}else{
 fetch(`/addToAttendeesRegister`,{
   method:"post",
   headers:{"Content-type":"application/json"},
   body:JSON.stringify({name:attendeeDoc.name,contact:attendeeDoc.contact,registrarContact:registrarContact,registerId:parseInt(document.getElementById("sendContactToRegister").registerId.value)})
 }).then(res=>res.json()).then(resp=>{
   
   if(resp.success===1){
     ToastAlert('toastAlert1','Successful',3000)
     document.getElementById("sendContactToRegister").contactPosition.value=''
   }else if(resp.success==='memberPresent'){
     ToastAlert('toastAlert2','Contact is already in the register you are sending to',4000)
     document.getElementById("sendContactToRegister").contactPosition.value=''
   } else if(resp.registerPresent===0){
     ToastAlert('toastAlert2','Register does not exist',3000)
     document.getElementById("sendContactToRegister").contactPosition.value=''
   }
   else{

   }
 })
 
}


}


}

}else{;}

}}type="text"  style={{width:"100%"}} class="btn btn-success">Send</div>
</form>

</div> */}
<div class="col-md-3"></div>

  </div>
 
</div>

<p></p>



<div class="row"style={{textAlign:"center",padding:"20px",fontSize:"15px"}}>

<div class="col-md-3"></div>
<div class="col-md-6">
    
    <div style={{padding:"3px"}}>Share to WhatsApp friends or Groups <br></br> <a style={{color:"green"}} href={whatsappAttendanceRegisterShareLink}><span  class="button1"><span class='fa fa-whatsapp'></span> Share this Register</span></a></div>
    
    </div>

    <div class="col-md-3"></div>

</div>
 
  </div>