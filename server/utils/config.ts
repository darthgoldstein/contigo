import dotenv from 'dotenv';

dotenv.config();

export const config = {
    facebookClientToken: process.env.FACEBOOK_CLIENT_TOKEN ?? '',
    facebookAppId: process.env.FACEBOOK_APP_ID ?? '',
};
