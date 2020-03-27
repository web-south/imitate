module.exports = app => {
  const express = require("express");
  const router = express.Router({
    mergeParams: true
  });

  // 1. get webs
  router.get("/", async (req, res) => {
    const webs = await req.Model.find()
      .populate("parent")
      .limit(10);
    res.send(webs);
  });

  // 2. post web
  router.post("/", async (req, res) => {
    const web = await req.Model.create(req.body);
    res.send(web);
  });

  // 3. put web
  // 3.1 get web
  router.get("/:id", async (req, res) => {
    const web = await req.Model.findById(req.params.id);
    res.send(web);
  });

  // 3.2 put web
  router.put("/:id", async (req, res) => {
    const web = await req.Model.findByIdAndUpdate(req.params.id, req.body);
    res.send(web);
  });

  // 4. delete web
  router.delete("/:id", async (req, res) => {
    await req.Model.findByIdAndDelete(req.params.id, req.body);
    res.send({
      success: true
    });
  });

  app.use(
    "/web/api/rest/:resource",
    async (req, res, next) => {
        const modelName = require("inflection").classify(req.params.resource);
        // 注意: models/Web.js不能为module.exports = {Web},否则,会报错;
        // 应该为 module.exports = Web
        req.Model = require(`../../models/${modelName}`);
        next();
      },
      router
  );
};