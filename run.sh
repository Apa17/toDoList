#!/bin/sh
(cd backend ; npm run start) &
(cd frontend; npm start) &
