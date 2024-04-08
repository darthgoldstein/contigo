export const Screen = {
    Home: 'home',
    Messages: 'messages',
    Likes: 'likes',
    Profile: 'profile',
} as const;

export namespace Enums {
    export type Screen = typeof Screen[keyof typeof Screen];
}
