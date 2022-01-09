/**
 *  For miscellaneous things that might not need an entire class dedicated to them
 */


class Misc {
    
    static async submitTestForm( params = {} ) {
        const formdata = params.formdata || null;

        // Send stored procedure and submit form to database
        // const storedProcedureSent = await sql.send({
        //     name: formdata.name || '',
        //     address: formdata.address || '',
        //     phone: formdata.phone || '',
        //     zip: formdata.zip || '',
        // });
        
        const storedProcedureSent = true;
        if (!storedProcedureSent) throw new Error('Failed to save formdata in database');

        return formdata;
    };

};


module.exports = Misc;
