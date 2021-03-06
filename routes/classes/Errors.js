/**
 *  Appends the date and time to errors as they happen
 */
class Errors {
    static async logError(err, next) {
        const now = new Date();
        console.error(`${now}\n\t${err}`);
        next();
    }
}

module.exports = Errors;
