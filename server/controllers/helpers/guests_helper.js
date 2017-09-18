import Guests from '../../models';

function get_all_guests() {
  return Guests;
}

function get_guest(req) {
  Guests.where({
    id: req.guest.id,
  })
    .first()
    .then((guest) => {
      return { guest, code: 200 };
    })
    .catch((err) => {
      console.log(err);
      return { err };
    });
}

function add_guest(guest) {
  Guests.insert(guest)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
      return { err };
    });

  return { guest, code: 200 };
}

function update_guest(guest) {
  return Guests.where({
    id: guest.id,
  })
    .first()
    .update(guest)
    .then((updated_guest) => {
      return { guest: updated_guest, code: 200 };
    });
}

function remove_guest(guest) {
  Guests.where({
    id: guest.id,
  })
    .first()
    .del();
}

module.exports = {
  get_all_guests,
  get_guest,
  add_guest,
  update_guest,
  remove_guest,
};