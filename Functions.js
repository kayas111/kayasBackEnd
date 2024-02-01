require('dotenv').config()
const nodemailer=require('nodemailer')
const {google}=require('googleapis') 

function ConvertFileToBase64(file){
    return new Promise((resolve,reject)=>{
      let fileReader=new FileReader()
      fileReader.readAsDataURL(file)
      fileReader.onload=()=>{
        resolve(fileReader)
      }
      fileReader.onerror=(error)=>{
        reject(error)
      }
    })
  }
  
  async function ReturnArrayChunks(dataArray,chunkSize){


    let noOfChunks=dataArray.length/chunkSize,chunkNo=1,remainder,chunks=[]
    //console.log(`${noOfChunks} chunks`)
    for(chunkNo;chunkNo<noOfChunks+1;chunkNo++){
    
  //  console.log(`chunk ${chunkNo}`)
    chunks.push(dataArray.slice((chunkNo-1)*chunkSize,chunkNo*chunkSize))
    
    }
    return chunks

}


async function SendEmail(Obj){

if(Obj.credentialsObj==undefined){
console.log('Pass credentials argument to sendMail function')


}else if(Obj.arrayOfEmailReceipients==undefined){
  console.log('Pass arrayOfEmailReceipients argument to sendMail function')
}else if(Obj.responseUrl==undefined){
  console.log('Pass responseUrl argument to sendMail function')
}else if(Obj.subject==undefined){
  console.log('Pass subject argument to sendMail function')
}else if(Obj.html==undefined){
  console.log('Pass html argument to sendMail function')
}else{
   
  const oAuth2Client = new google.auth.OAuth2(
    process.env.mailerId,
    process.env.mailerSecret,
    process.env.redirectURI
  );
  
  oAuth2Client.setCredentials({ refresh_token: process.env.refreshToken})
  //const accessToken = await oAuth2Client.getAccessToken()
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user:'kayasforyou@gmail.com',
      pass:'aaihjqmydruuasel'
  }
  })


 
  
  return await transport.sendMail({
    from: Obj.credentialsObj.email,
    
    to:Obj.arrayOfEmailReceipients,
  
    subject: Obj.subject,
    
    html:Obj.html +`<div><div style="text-align:center;padding-top:40px;font-size:20px;"><a href="${Obj.responseUrl}"><span style="border:1px solid red;padding:8px;border-radius:20px;color:red;">Send reply</span></a></div>` +'<div style="padding-top:40px;padding-bottom:5000px;"><div style="text-align:center;background:black;font-size:20px;color:white;padding-top:40px;padding-bottom:40px;">Powered by Kayas <div style="font-size:8px;padding-top:15px;">WhatsApp Kayas on 0703852178</div></div></div></div>'
     
    
    
  }).then(resp=>{
   
return  (resp)
  
  })



}


}



module.exports={ReturnArrayChunks,ConvertFileToBase64,SendEmail}