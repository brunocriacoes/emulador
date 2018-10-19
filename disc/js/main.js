"use strict";

const query = x => document.querySelector( x );
const log   = console.log;
function simSet( COLOR )
{
    query( '#sim-set' ).style.fill = COLOR;
}

let input   = document.querySelector( `#sim-logo` ); 
let preview = document.querySelector( `#sim-preview-logo` );
function getLogo()
{

    if (input.files && input.files[0])
    {
        let reader   = new FileReader();
        reader.onload = ( e ) =>  {
            let img = e.srcElement.result;
            preview.href.baseVal = img;
        };           
        reader.readAsDataURL(input.files[0]);
    }        
}
const closeFilter   = () => query( '#sim-filtros').click();
const cancelFiltros = () => {
    preview.style.mixBlendMode = '';
    preview.style.filter = '' ;
    closeFilter();
} 
function blend( x )
{
    preview.style.mixBlendMode = x;
    closeFilter();
}
function fiutro( e )
{
    switch ( e ) 
    {
        case 'gray':
            preview.style.filter = 'grayscale(100%)' ;
        break;
        case 'invert':
            preview.style.filter = 'invert(100%)';
        break;      
    }
    closeFilter();
}