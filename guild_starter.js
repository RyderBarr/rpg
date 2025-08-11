// Starter Data - DO NOT MODIFY THIS DATA DIRECTLY
const guildMembers = [
    { name: 'Kaelen', class: 'Mage', level: 60, exp: 55000, status: 'online' },
    { name: 'Lyra', class: 'Archer', level: 58, exp: 48000, status: 'offline' },
    { name: 'Arik', class: 'Warrior', level: 60, exp: 62000, status: 'online' },
    { name: 'Seraphina', class: 'Healer', level: 59, exp: 51000, status: 'online' },
    { name: 'Grom', class: 'Warrior', level: 60, exp: 59000, status: 'offline' },
    { name: 'Elara', class: 'Mage', level: 57, exp: 42000, status: 'offline' },
    { name: 'Jax', class: 'Archer', level: 60, exp: 65000, status: 'online' },
    { name: 'Milo', class: 'Healer', level: 56, exp: 39000, status: 'offline' }
];

const reportOutput = document.getElementById('report-output');

// Function to append reports to the HTML
function appendReport(title, content) 
{

    const section = document.createElement('div');
    section.className = 'report-section';
    const h2 = document.createElement('h2');
    h2.textContent = title;
    const pre = document.createElement('pre');
    pre.textContent = content;
    section.appendChild(h2);
    section.appendChild(pre);
    reportOutput.appendChild(section);

}

// Your code goes here!

// task 1
    let names = [];

    guildMembers.forEach(guildMember => {

        // adding all the names to the array
            names.push(guildMember.name);

    });

    appendReport('task 1: List All Member Names', names);


// task 2
    // looking for Arik
        let memberArik = guildMembers.find(member => member.name ==='Arik');

    appendReport('task 2: Find a Specific Member',
       
        // making it a string
        JSON.stringify(memberArik, null, 2)

    );


// task 3
    appendReport('task 3: Check for Online Members',

        // checking all of the members status to look for AT LEAST one online
            guildMembers.some(member => member.status === 'online')

    );


// Task 4

    // finding all mages
        let mageMembers = guildMembers.filter(member => member.class === 'Mage');

    appendReport('task 4: Get a List of All Mages',
        
        // turning it into a string
            JSON.stringify(mageMembers, null, 2)
        
    );


// Task 5
    // adding raid list to all members   
    const raidList = guildMembers.map(member => ({ ...member, raidReady: true}));

    appendReport('task 5: Upgrade Member Status ', 

        // turning it into a string
            JSON.stringify(raidList, null, 2)
        
    )


// Task 6
    appendReport('Task 6: Verify Everyone is at Max Level',

        guildMembers.every(member => member.level == 60)

    )


// Task 7
    // getting the total exp
        let totalExp = guildMembers.reduce((acc,member)=>(

            acc + member.exp
            
        ),0,)

    appendReport('Task 7: Calculate Total Guild XP (reduce)',totalExp)


// Task 8
    // counting classes
        const classReport = guildMembers.reduce((acc, member) => 
        {

            // if the member class is in acc
                if (member.class in acc) 
                {

                    // add one
                        acc[member.class] += 1;

                } else 
                {

                    // create a new key, value pair
                        acc[member.class] = 1;
            
                }

            // return it
                return acc;
            
        }, {})

    appendReport('Task 8: Count Members by Class (reduce)',

        // making it a string
            JSON.stringify(classReport, null, 2)

    )


// task 9
    const topLevel = guildMembers.filter
    (
        
        // search for online level 60 guild members
            member => member.status === 'online' && member.level == 60

    ).map
    (

        member => 
        (

            // writing new object
                {

                    name:member.name,

                    level:member.level,

                    exp:member.exp

                }

        )

    ).sort
    (

        // desending order
            (a,b) => b.exp - a.exp

    )
     
    appendReport('Task 9: Combine Methods for an Elite List (filter, map, sort)',

        // making it a string
            JSON.stringify(topLevel, null, 2)

    );
