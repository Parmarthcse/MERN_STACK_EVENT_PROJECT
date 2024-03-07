import React from 'react'

const Services = () => {
  const services = [
    {
id: 1,
url: "/birthday.jpg",
title: "Birthday Planning",
    },
    {
      id: 2,
      url: "/anniversary.jpg",
      title: "Anniversary Planning",
          },
          {
            id: 3,
            url: "/camping.jpg",
            title: "Camping Trip Planning",
                },
                {
                  id: 4,
                  url: "/gamenight.jpg",
                  title: "Game Night Planning",
                      },
                      {
                        id: 5,
                        url: "/party.jpg",
                        title: "Party Planning",
                            },
                            {
                              id: 6,
                              url: "/wedding.jpg",
                              title: "Wedding Planning",
                                  },
  ];

  return<>
  <div className="services container">
    <h2>Our Services</h2>
    <div className="banner">
      {
        services.map(element=>{
          return(
            <div className="item" key={element.id}>
              <h3>{element.id}</h3>
              <img src={element.url} alt={element.title}/>
              {/* We Give all elements a unique id and each item have element id, and image src url and alt element.title */}
              </div>
          )
        })
      }
    </div>
  </div>
  </>
  
}

export default Services