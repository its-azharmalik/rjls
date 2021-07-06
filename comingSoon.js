window.addEventListener('DOMContentLoaded', () =>{
    let cursor = document.querySelector('.cursor');
    let cursor_dot = document.querySelector('.cursor-dot');
    let cursor1index = 13.5;
    let cursor2index = -3;
    let dark = document.querySelector('.dark')
    let light = document.querySelector('.light')
    let switch_button = document.querySelector('.switch')
    let toggle_wrapper = document.querySelector('.toggle-wrapper')
    let play_button = document.querySelector('.play-button')
    let cursor2 = document.querySelector('.cursor-2')
    let h1 = document.getElementsByTagName('h1')
    let p = document.getElementsByTagName('p')
    let a = document.getElementsByTagName('a')
    let span = document.getElementsByTagName('span')
    console.log(h1)

    document.addEventListener('mousemove' , (e) =>{
        setTimeout(()=>{
            cursor.style.top = (e.clientY - cursor1index) + 'px';
            cursor.style.left = (e.clientX -cursor1index) + 'px';
            
        },80)
        setTimeout(()=>{
            cursor_dot.style.top = (e.clientY+cursor2index) + 'px';
            cursor_dot.style.left = (e.clientX+cursor2index) + 'px';
        },50)
        
    })
    let toggle_wrapper_width = toggle_wrapper.clientWidth;
    dark.onclick = () =>{
        // dark.classList.remove('active-toggle')
        // light.classList.add('active-toggle')
        switch_button.style.left = '0'
        switch_button.style.right = toggle_wrapper_width/2 +'px'
        console.log(toggle_wrapper_width/2)
        switch_button.innerHTML = 'Dark'
    }
    light.onclick = () =>{
        // dark.classList.add('active-toggle')
        // light.classList.remove('active-toggle')
        switch_button.style.right = '0'
        switch_button.style.left = toggle_wrapper_width/2 + 'px'
        switch_button.innerHTML = 'Light'

    }
    h1[0].addEventListener('mouseover' , (e) =>{
        console.log('0')
    })
    let i = 0
    let cursorHoverStyle = ( arrayOfElement )=>{
        for (i = 0; i < arrayOfElement.length ; i++ )
        {
            arrayOfElement[i].addEventListener('mouseover' , (e) =>{
                cursor_dot.style.transform= 'scale(2)'
                cursor_dot.style.opacity= '.5'
            })
            arrayOfElement[i].addEventListener('mouseout' , (e) =>{
                cursor_dot.style.transform= 'scale(1)'
                cursor_dot.style.opacity= '1'
            })
        }
    }
    cursorHoverStyle( h1 );
    cursorHoverStyle( a );
    cursorHoverStyle( span );
    // cursorHoverStyle( p );
})