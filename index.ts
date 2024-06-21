/* 
Rode o comando abaixo no shell para instalar o bcrypt:
npm i --save-dev @types/bcrypt
*/
import bcrypt from 'bcrypt';

const saltRounds = 10; // Número de rounds de salt 

export async function hashPassword(password: string): Promise<string> {
    try {
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword;
    } catch (error) {
        throw new Error('Error hashing password');
    }
}

async function main() {
  const password = 'Teste!';
  try {
      const hashedPassword = await hashPassword(password);
      console.log('Hashed Password:', hashedPassword);
  } catch (error) {
      console.error('Error:', error);
  }
}

main();
