import React from 'react';
function FooterCol({itemsArr,Heading}){
    return(
        <div className="flex flex-col items-start h-[40vh] mobile:h-[fit-content] mobile:my-[7px]">
        <h2 className='font-bold cursor-default'>{Heading}</h2>
                {itemsArr.map((val)=>{
                    return([
                        <li className='hover:cursor-pointer hover:underline list-none my-[7px] text-[#222222]'>{val}</li>
                    ])
                    })}
        </div>
    )
}
function Footer() {
    return (
        <div className='h-[50vh] flex justify-around items-center bg-[#f7f7f7] mt-[40px] mobile:flex-col mobile:h-[fit-content] mobile:items-start mobile:p-[10px]'>
            <div>
                <FooterCol  Heading={'Support'}  itemsArr={['Help Centre','Safety information' ,'Cancellation options','Our COVID-19 Response', 'Supporting people with disabilities','Report a neighbourhood concern']} />
            </div>
            <div>
                <FooterCol Heading={'Community'}  itemsArr={['Airbnb.org: disaster relief housing','Support Afghan refugees','Celebrating diversity & belonging','Combating discrimination']}/>
            </div>
            <div>
                <FooterCol  Heading={'Hosting'} itemsArr={['Try hosting','AirCover: protection for Hosts','Explore hosting resources','Visit our community forum', 'How to host responsibly']}/>
            </div>
            <div>
                <FooterCol Heading={'About'}  itemsArr={['Newsroom','Learn about new features','Letter from our founders','Careers','Investors','Airbnb Luxe']}/>
            </div>
        </div>
    );
}

export default Footer;
