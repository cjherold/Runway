/**
 *  For miscellaneous things that might not need an entire class dedicated to them
 */


class Misc {
    
    async submitTestForm( params = {} ) {
        const formdata = params.formdata || null;

        // Send stored procedure
        // const storedProcedureSent = await sql.send({
        //     name: formdata.name || '',
        //     address: formdata.address || '',
        //     phone: formdata.phone || '',
        //     zip: formdata.zip || '',
        // });
        const storedProcedureSent = true;
        if (!storedProcedureSent) throw new Error('Stored procedure failed');

        return true;
    };

};


module.exports = Misc;
