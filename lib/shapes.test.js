// Constructor shapes is imported.
const shapes = require('./shapes.js');

// to verify color for Traingle.
describe('Triangle',()=>{
    describe('render', ()=>{
        it('should return the color you set', ()=>{
            const triangle =new shapes.Triangle();
            expect(triangle.render('blue')).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />')
        });
    })

})

// to verify color for circle 
describe('Circle',()=>{
    describe('render', ()=>{
        it('should return the color you set', ()=>{
            const circle =new shapes.Circle();
            expect(circle.render('blue')).toEqual('<circle cx="150" cy="100" r="100" fill="blue" />')
        });
    })

})

// to verify color for square 
describe('Square',()=>{
    describe('render', ()=>{
        it('should return the color you set', ()=>{
            const square =new shapes.Square();
            expect(square.render('blue')).toEqual(`<rect x="50" y="5"  width="190" height="190" fill="blue" />`)
        });
    })

})