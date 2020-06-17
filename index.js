paths = document.querySelectorAll( 'path' );
imprintlink = document.getElementById( 'imprintlink' );
imprint = document.getElementById( 'imprint' );

paths.forEach( function( path ) {
  const id = path.id;
  const el = document.getElementById( id + '_btn');
  const ship = document.getElementById( id + '_ship');

  if ( el ) {
    path.addEventListener( 'mouseover', function( e ) {
      console.log( id );
      el.style.display = 'block';
    } );
    path.addEventListener( 'mouseout', function( e ) {
      el.style.display = 'none';
    } );
  }

  if ( ship ) {
    path.addEventListener( 'mouseover', function( e ) {
      console.log( 'ship', id );
      ship.style.display = 'block';
    } );
    path.addEventListener( 'mouseout', function( e ) {
      ship.style.display = 'none';
    } );
  }
} );

imprintlink.addEventListener( 'click', function( e ) {
  console.log( '><' );
  if ( imprint.style.display === 'block' ) {
    imprint.style.display = 'none';
  } else {
    imprint.style.display = 'block'
  }

} );
