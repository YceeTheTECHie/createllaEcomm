export const adIndexController = () => {
let UsedIndex=[]
       const newIndex=Math.floor(Math.random()*1000);
        if(UsedIndex.includes(newIndex)){
            return adIndexController()
        }else{
            UsedIndex.push(newIndex)
            return newIndex
        }
}
