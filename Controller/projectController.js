
const projects =require('../Models/projectSchema')


 exports.addProjects =async (req,res)=>{
    console.log("inside add project function")
    const userId=req.payload
    const projectImage=req.file.filename
    const {title,languages,github,website,overview}=req.body
    //console.log(` ${title} ,${languages} ,${github} ,${website} ,${overview} ,${projectImage},${userId}`)
   

    try {

        const existingProject=await projects.findOne({github})
        if(existingProject){
            res.status(406).json('project already exists ...upload another one')
        }
        else{
            const newProject=new projects({
    
        title,languages,github,website,overview,projectImage,userId  
            })
            await newProject.save()
            res.status(200).json(newProject)
        }
        
    } catch (error) {
        res.status(401).json(`Request failed $(error)`)
    }
}