import * as bcrypt from 'bcrypt';
import { constants } from 'src/components/config/constants';

export async function hash(password: string): Promise<string> {
    return await bcrypt.hash(password, constants.SALT_ROUNDS);
}