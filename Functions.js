

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

module.exports={ReturnArrayChunks,ConvertFileToBase64}