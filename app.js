import express from "express";
import cors from "cors";
import logger from "morgan";
import path from "path";
import createError from 'http-errors';

const app = express();

const __dirname = path.resolve();
app.use(logger("dev"));
app.use(cors());

// parse request data content type application/json
app.use(express.json());
// parse request data content type application/x-wwww-form-urlencoded
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// use api routes
import apiRoutes from "./routes/api";
app.use('/api', apiRoutes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404, 'Not found'));
});

// error handler
app.use((err, req, res, next) => {
    // console.error(err);
    res.status(err.status || 500);
    res.send({
        error: {
            success: false,
            status: err.status || 500,
            message: err.message
        }
    });
});

// setup the server port 
const PORT = process.env.PORT || 5000

// server listen to the port 
app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
});