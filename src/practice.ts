function generateError(message: string, code: number): never {
    throw { message, code };
}

generateError("error occured!", 500);
