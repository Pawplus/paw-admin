import type {Database} from "~/types/database.types";

export const useAuth = defineStore<string,{
    email:string,
    password:string
},{},{
    signInWithEmail:()=>Promise<boolean>
}>("auth",{
    state:()=>({
        email:"",
        password:""
    }),
    getters:{},
    actions:{
        async signInWithEmail():Promise<boolean>{
            const client = useSupabaseClient<Database>()

            const signIn = await  client.auth.signInWithPassword(
                {
                    email:this.email,
                    password:this.password
                }
            )

            if(signIn.error){
                //error
            }
            return  true
        }
    }
})