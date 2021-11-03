router.put('/:id', (req, res) => {
    User.update(req.body.money, {
      individualHooks: true,
      where: {
        req.session.user_id
        // id: req.params.id
      }
    })
    .then(dbUserData => {
      if (!dbUserData[0]) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });