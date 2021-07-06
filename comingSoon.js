window.addEventListener('DOMContentLoaded', () =>{
    let cursor = document.querySelector('.cursor');
    let cursor_dot = document.querySelector('.cursor-dot');
    let cursor1index = 13.5;
    let cursor2index = -3;
    let dark = document.querySelector('.dark')
    let light = document.querySelector('.light')
    let switch_button = document.querySelector('.switch')
    let toggle_wrapper = document.querySelector('.toggle-wrapper')
    let dark_desktop = document.querySelector('.dark-desktop')
    let light_desktop = document.querySelector('.light-desktop')
    let switch_button_desktop = document.querySelector('.switch-desktop')
    let toggle_wrapper_desktop = document.querySelector('.toggle-wrapper-desktop')
    let play_button = document.querySelector('.play-button')
    let cursor2 = document.querySelector('.cursor-2')
    let h1 = document.getElementsByTagName('h1')
    let p = document.getElementsByTagName('p')
    let a = document.getElementsByTagName('a')
    let span = document.getElementsByTagName('span')
    let glass_class = document.querySelectorAll('.glass')
    let glass_small = document.querySelectorAll('.glass-small')
    let coming_soon = document.querySelector('.coming-soon')
    let cssVariables = document.querySelector(':root');
    if(window.innerWidth <=980)
    {
        
        glass_class.forEach((glass_element) =>{
            glass_element.classList.remove('glass')
        })
        glass_small.forEach((glass_element) =>{
            glass_element.classList.remove('glass-small')
            console.log(glass_element)
        })

    }
    let cssVariablesStyles = getComputedStyle(cssVariables);
    console.log(coming_soon)
    // document.addEventListener('mousemove' , (e) =>{
    //     setTimeout(()=>{
    //         cursor.style.top = (e.clientY - cursor1index) + 'px';
    //         cursor.style.left = (e.clientX -cursor1index) + 'px';
            
    //     },80)
    //     setTimeout(()=>{
    //         cursor_dot.style.top = (e.clientY+cursor2index) + 'px';
    //         cursor_dot.style.left = (e.clientX+cursor2index) + 'px';
    //     },50)
        
    // })
    let toggle_wrapper_width = toggle_wrapper.clientWidth;
    dark.onclick = () =>{
        // dark.classList.remove('active-toggle')
        // light.classList.add('active-toggle')
        switch_button.style.left = '0'
        switch_button.style.right = toggle_wrapper_width/2 +'px'
        console.log(toggle_wrapper_width/2)
        switch_button.innerHTML = 'Dark'
        coming_soon.style.background = "#000E36";
        cssVariables.style.setProperty('--gradient-light1' , 'rgba(0,0,0,0)')
        cssVariables.style.setProperty('--gradient-light2' , 'rgba(0,14,54,.5)')
        cssVariables.style.setProperty('--red-main' , '#2e2e2e')
        coming_soon.style.color = '#fff'
        a.forEach(spanEl =>{
            spanEl.style.color = '#fff'
        })
    }
    light.onclick = () =>{
        // dark.classList.add('active-toggle')
        // light.classList.remove('active-toggle')
        switch_button.style.right = '0'
        switch_button.style.left = toggle_wrapper_width/2 + 'px'
        switch_button.innerHTML = 'Light'
        coming_soon.style.backgroundColor = "#fff";
        cssVariables.style.setProperty('--gradient-light1' , 'rgba(255, 255, 255, 0)')
        cssVariables.style.setProperty('--gradient-light2' , 'rgb(255, 255, 255)')
        cssVariables.style.setProperty('--red-main' , '#ef233c')
        coming_soon.style.color = '#000'
        a.forEach(spanEl =>{
            spanEl.style.color = '#000'
        })
    }
    let toggle_wrapper_width_desktop = toggle_wrapper_desktop.clientWidth;
    dark_desktop.onclick = () =>{
        // dark.classList.remove('active-toggle')
        // light.classList.add('active-toggle')
        switch_button_desktop.style.left = '0'
        switch_button_desktop.style.right = toggle_wrapper_width_desktop/2 +'px'
        switch_button_desktop.innerHTML = 'Dark'
        coming_soon.style.background = "#000E36";
        cssVariables.style.setProperty('--gradient-light1' , 'rgba(0,0,0,0)')
        cssVariables.style.setProperty('--gradient-light2' , 'rgba(0,14,54,.5)')
        cssVariables.style.setProperty('--red-main' , '#2e2e2e')
        coming_soon.style.color = '#fff'
        a.forEach(spanEl =>{
            spanEl.style.color = '#fff'
        })
   }
    light_desktop.onclick = () =>{
        // dark.classList.add('active-toggle')
        // light.classList.remove('active-toggle')
        switch_button_desktop.style.right = '0'
        switch_button_desktop.style.left = toggle_wrapper_width_desktop/2 + 'px'
        switch_button_desktop.innerHTML = 'Light'
        coming_soon.style.backgroundColor = "#fff";
        cssVariables.style.setProperty('--gradient-light1' , 'rgba(255, 255, 255, 0)')
        cssVariables.style.setProperty('--gradient-light2' , 'rgb(255, 255, 255)')
        cssVariables.style.setProperty('--red-main' , '#ef233c')
        coming_soon.style.color = '#000'
        a.forEach(spanEl =>{
            spanEl.style.color = '#000'
        })
    }
    h1[0].addEventListener('mouseover' , (e) =>{
        console.log('0')
    })
    // let i = 0
    // let cursorHoverStyle = ( arrayOfElement )=>{
    //     for (i = 0; i < arrayOfElement.length ; i++ )
    //     {
    //         arrayOfElement[i].addEventListener('mouseover' , (e) =>{
    //             cursor_dot.style.transform= 'scale(2)'
    //             cursor_dot.style.opacity= '.5'
    //         })
    //         arrayOfElement[i].addEventListener('mouseout' , (e) =>{
    //             cursor_dot.style.transform= 'scale(1)'
    //             cursor_dot.style.opacity= '1'
    //         })
    //     }
    // }
    // cursorHoverStyle( h1 );
    // cursorHoverStyle( a );
    // cursorHoverStyle( span );
    // cursorHoverStyle( p );
    
    // cursorHoverStyle( p );
})