// Dependancies
import { JSDOM } from "jsdom";

/** 
 * Properties
 * **/
export const URL_BASE : string = "https://www.gocomics.com/garfield/";
export const FIRST_GARFIELD : Date = new Date(1978, 5, 19);
export const PIPE_COMIC : Date = new Date(1978, 6, 27);
export const WINDOW_COMIC : Date = new Date(1981, 2, 29);


/**
 * 
 * Requests a Garfield Comic From Gocomics
 * 
 * Accepts Date Object and 
 * Returns Promise Containing 
 * Image URL as string
 *  
 * **/

// Parameters
/**  
 * @param date
 * **/
export async function getGarfield(date: Date) : Promise<string>
{
    let year : number = date.getFullYear();
    let month : number = date.getMonth() + 1;
    let day : number = date.getDate();

    if(date.valueOf() < FIRST_GARFIELD.valueOf())
    {
        throw new Error("Requested Date Outside Range (Pre-Garfield)");
    }

    if(date.valueOf() > Date.now().valueOf())
    {
        throw new Error("Requested Date Outside Range (Future)")
    }

    let url = `${URL_BASE}${year}/${month}/${day}`;


    let retPromise : Promise<string> = new Promise((resolve, reject) =>
    {
        fetch(url)
        .then(res => res.text())
        .then(html => 
        {
            const dom = new JSDOM(html);

            // DOMParser() does not work on Node
            //const dom = new DOMParser().parseFromString(html, "text/html");
            //let pictureContainer = dom.querySelector(".item-comic-image");

            let pictureContainer = dom.window.document.querySelector(".item-comic-image");
                    
            if(pictureContainer)
            {
                let img : HTMLImageElement = pictureContainer.children.item(0) as HTMLImageElement;

                if(img)
                {
                    let src = img.src;

                    resolve(src);
                }
            }   
        })
        .catch(e => 
        {
            console.error(e);
            resolve("");
            throw new Error("Garfield Comic Not Found");
        });
    });

    return retPromise;
}

export async function todayGarfield() : Promise<string>
{
    return getGarfield(new Date(Date.now()));
}

export async function randomGarfield() : Promise<string>
{
    let r = null;
    
    while(r === null)
    {
        let difference = Date.now().valueOf() - FIRST_GARFIELD.valueOf();

        let raw = FIRST_GARFIELD.valueOf() + Math.floor( Math.random() * difference );
    
        let date = new Date(raw);

        r = await getGarfield(date);
    }

    return await r;
}

export async function randomThreePanel() : Promise<string>
{
    let r = null;
    
    while(r === null)
    {
        let difference = Date.now().valueOf() - FIRST_GARFIELD.valueOf();

        let raw = FIRST_GARFIELD.valueOf() + Math.floor( Math.random() * difference );
    
        let date = new Date(raw);
        
        while(date.getDay() == 0)
        {
            raw = FIRST_GARFIELD.valueOf() + Math.floor( Math.random() * difference );
            date = new Date(raw);
        }

        r = await getGarfield(date);
    }

    return await r;
}

export async function randomSunday() : Promise<string>
{
    let r = null;
    
    while(r === null)
    {
        let difference = Date.now().valueOf() - FIRST_GARFIELD.valueOf();

        let raw = FIRST_GARFIELD.valueOf() + Math.floor( Math.random() * difference );
    
        let date = new Date(raw);
        
        while(date.getDay() != 0)
        {
            raw = FIRST_GARFIELD.valueOf() + Math.floor( Math.random() * difference );
            date = new Date(raw);
        }

        r = await getGarfield(date);
    }

    return await r;
}