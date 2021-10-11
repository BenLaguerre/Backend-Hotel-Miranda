//This file was used to fill the tables of the dataBase.

const {Room, Booking, Concierge, Review, User}  = require('./model');

var conciergesData = require('./json/concierges.json');
var bookingsData = require('./json/bookings.json');
var reviewsData = require('./json/reviews.json');
var roomsData = require('./json/rooms.json');



//Collection room
function room () {

  for (let room of roomsData) {
    const filer = new Room ({ 
      id: room.id,
      name: room.name,
      bed: room.bed,
      price: room.price,
      status: room.status,
      photo: room.photo
    });
     filer.save();
  }
}

//Collection booking
function booking () {

  for (let booking of bookingsData) {
    const filer = new Booking ({ 
      id: booking.id,
      name: booking.name,
      booking_date: booking.booking_date,
      start_date: booking.start_date,
      exit_date: booking.exit_date,
      message: booking.message,
      room_id: Math.ceil(Math.random() * 20)
    });
     filer.save();
  }
}

//Collection concierge
 function concierge () {

  for (let concierge of conciergesData) {
    const filer = new Concierge ({ 
      id: concierge.id,
      name: concierge.name,
      join_date: concierge.join_date,
      job_description: concierge.job_description,
      phone_number: concierge.phone_number,
      state: concierge.state,
      photo: concierge.photo
    });
     filer.save();
  }
}

//Collection review
function review () {

  for (let review of reviewsData) {
    const filer = new Review ({ 
      id: review.id,
      name: review.name,
      date: review.date,
      comment: review.comment
    });
   filer.save();
  }
}

//Collection User
function user (){
  const admin = new User ({
    username: 'admin',
    password: 'admin'
  })
  admin.save();
  const user1 = new User ({
    username: 'user1',
    password: 'user1'
  })
  user1.save();
  const user2 = new User ({
    username: 'user2',
    password: 'user2'
  })
  user2.save();
}


booking();