import prismaClient from "../../prisma";

class DetailUserService{
   async execute(user_id: String) {

      const user = await prismaClient.user.findFirst({
         where:{
            id: String(user_id)
         },
         select:{
            id:true,
            name:true,
            email:true
         }
      })

    return user;
   }
}

export { DetailUserService };