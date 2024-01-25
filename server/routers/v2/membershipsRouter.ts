// Disable ESLint rule for promises since they are handled
/* eslint-disable @typescript-eslint/no-misused-promises */

// Import necessary modules and services
import express from "express";
import {
    createJasenyys,
    readJasenyysById,
    updateJasenyysById,
    deleteJasenyysById,
    getAllJasenyydet,
} from "../../services/jasenyysService";
import {
    getDecodedToken,
    READ_RIGHTS_SET,
    WRITE_RIGHTS_SET,
    EDIT_RIGHTS_SET,
    DELETE_RIGHTS_SET,
} from "../../utils/authenticationUtils";

// Initialize an express router
const router = express.Router();

// Define POST route for creating a new Jasenyys
router.post("/", (async (req, res) => {
    const decodedToken = getDecodedToken(req);

    if (!WRITE_RIGHTS_SET.has(decodedToken.rooli)) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    const newJasenyys = await createJasenyys(req.body);
    res.status(201).json(newJasenyys); // 201 Created
}) as express.RequestHandler);

// Define GET route for reading all Jasenyys records
router.get("/", (async (req, res) => {
    const decodedToken = getDecodedToken(req);

    if (!READ_RIGHTS_SET.has(decodedToken.rooli)) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    const jasenyydet = await getAllJasenyydet();
    res.status(200).json(jasenyydet); // 200 OK
}) as express.RequestHandler);

// Define GET route for reading a Jasenyys by ID
router.get("/:id", (async (req, res) => {
    const decodedToken = getDecodedToken(req);

    if (!READ_RIGHTS_SET.has(decodedToken.rooli)) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    const id = parseInt(req.params.id);
    if (!Number.isInteger(id)) throw new Error("Invalid ID");

    const jasenyys = await readJasenyysById(id);
    res.status(200).json(jasenyys); // 200 OK
}) as express.RequestHandler);

// Define PUT route for updating a Jasenyys by ID
router.put("/:id", (async (req, res) => {
    const decodedToken = getDecodedToken(req);

    if (!EDIT_RIGHTS_SET.has(decodedToken.rooli)) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    const id = parseInt(req.params.id);
    if (!Number.isInteger(id)) throw new Error("Invalid ID");

    const updatedJasenyys = await updateJasenyysById(id, req.body);
    res.status(200).json(updatedJasenyys); // 200 OK
}) as express.RequestHandler);

// Define DELETE route for deleting a Jasenyys by ID
router.delete("/:id", (async (req, res) => {
    const decodedToken = getDecodedToken(req);

    if (!DELETE_RIGHTS_SET.has(decodedToken.rooli)) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    const id = parseInt(req.params.id);
    if (!Number.isInteger(id)) throw new Error("Invalid ID");

    const deletedJasenyys = await deleteJasenyysById(id);
    res.status(204).json(deletedJasenyys); // 204 No Content
}) as express.RequestHandler);

// Export the router for use in other modules
export default router;
