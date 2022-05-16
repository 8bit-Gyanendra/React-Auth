export default interface NewsApiInterface{ 
        source  : source 
        author: String 
        title: String 
        description: String
        url: String 
        urlToImage: any
        publishedAt: String
        content: String
}


interface source{
       id : String      
       name : String 
}