

function head (req, res, next) {
    const head = {};

    head.home = {
        charset: 'UTF-8',
        title: 'Home',
        meta: 'metatag',
        author: 'Somebody McPerson',
        keywords: 'homepage, test',
        desc: 'This is a homepage'
    };

    head.about = {
        charset: 'UTF-8',
        title: 'About',
        meta: 'metatag',
        author: 'Somebody McPerson',
        keywords: 'about, test',
        desc: 'This is an about page'
    };

    head.form = {
        charset: 'UTF-8',
        title: 'Sample Form',
        meta: 'metatag',
        author: 'Somebody McPerson',
        keywords: 'form, test',
        desc: 'This is a form page'
    }

    res.locals.head = head;
    
    next();

}

module.exports = head;
