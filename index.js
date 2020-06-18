paths = document.querySelectorAll( 'path' );
imprintlink = document.getElementById( 'imprintlink' );
imprint = document.getElementById( 'imprint' );

paths.forEach( function( path ) {
  const id = path.id;
  const el = document.getElementById( id + '_btn');
  const ship = document.getElementById( id + '_ship');

  if ( el ) {
    path.addEventListener( 'mouseover', function( e ) {
      el.style.display = 'block';
    } );
    path.addEventListener( 'mouseout', function( e ) {
      el.style.display = 'none';
    } );
  }

  if ( ship ) {
    path.addEventListener( 'mouseover', function( e ) {
      ship.style.display = 'block';
    } );
    path.addEventListener( 'mouseout', function( e ) {
      ship.style.display = 'none';
    } );
  }
} );

imprintlink.addEventListener( 'click', function( e ) {
  if ( imprint.style.display === 'block' ) {
    imprint.style.display = 'none';
  } else {
    imprint.style.display = 'block'
  }

} );

function resize() {
  const bgImg = document.querySelector('.bg-image');
  const { width, height } = bgImg.getBoundingClientRect();
  const svg = document.querySelector('.svg-wrap svg');
  const content = document.querySelector('.content');

  svg.setAttribute( 'width', `${ width }px` );
  svg.setAttribute( 'height', `${ height }px` );
  content.style.width = `${ width }px`;
  content.style.height = `${ height }px`;
}

window.addEventListener('resize', resize);

imagesLoaded( document.body, function( instance ) {
  resize();
});
