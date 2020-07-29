window.onscroll = (event) => {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.querySelector('nav.nav').className = 'nav nav-sticky';
  } else {
    document.querySelector('nav.nav').className = 'nav';
  }
}
