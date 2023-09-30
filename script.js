let namebt=document.querySelector('.name')
let imagebt=document.querySelector('.image')
let refresh=document.getElementById('reload')
let search=document.querySelector('.searchbtn')
let searchdata=document.getElementById('searchin')
const getHero = ()=>{
    num=Math.ceil(Math.random()*600)
    fetch("https://www.superheroapi.com/api.php/328569613003066/"+ num).then(Response =>Response.json()).then(json => {
        console.log(json.name)
        console.log(json.image)
        namebt.innerText=json.name
        imagebt.innerHTML=`<img src='${json.image.url}' height=300px width=300px/>`
    }
    )
} 
const serachhero = () =>{
    console.log(searchdata.value)
    
    let namee=searchdata.value
    fetch("https://www.superheroapi.com/api.php/328569613003066/search/"+namee).then(Response => Response.json()).then(json =>{
        console.log(json.response)
        if(json.response=='success'){
            console.log(json.results[0].name)
            namebt.innerText=json.results[0].name
            imagebt.innerHTML=`<img src='${json.results[0].image.url}' height=300px width=300px/>`
        }
        else{
            console.log("NOT FOUND")
            namebt.innerText='Not Found'
            imagebt.innerHTML=` `
        }
    })
}
refresh.onclick = function(){
    getHero()
}
search.onclick = function(){
    serachhero()
}