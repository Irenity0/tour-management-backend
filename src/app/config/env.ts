import dotenv from 'dotenv';
dotenv.config()

interface EnvConfig {
    PORT: string,
    MONGO_URI: string,
    NODE_ENV: "developemnt" | "production",
}

const loadEnvVariables = () : EnvConfig => {
    const requiredEnvVariables : string[] = ["PORT", "MONGO_URI", "NODE_ENV"]

    requiredEnvVariables.forEach(key => {
        if(!process.env[key]){
            throw new Error(`Missing required env keys ${key}`);
        }
    })
    
    return {
    PORT : process.env.PORT as string,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    MONGO_URI : process.env.MONGO_URI!,
    NODE_ENV : process.env.NODE_ENV as "developemnt" | "production"

}

}

export const envVars = loadEnvVariables()