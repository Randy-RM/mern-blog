import colors from "colors";
import { NextFunction, Request, Response } from "express";

colors.enable();

function getObjectPropertyValue(
  obj: Record<string, any>,
  attributeName: string
): any {
  if (obj.hasOwnProperty(attributeName)) {
    return obj[attributeName];
  } else {
    return null;
  }
}

function logger(req: Request, res: Response, next: NextFunction) {
  const methodColor = {
    GET: "green",
    POST: "blue",
    PUT: "yellow",
    DELETE: "red",
  };

  // const color = methodColor[req.method] || "white";
  const color = getObjectPropertyValue(methodColor, req.method) || "white";

  console.log(
    `[${new Date().toLocaleString()}] ${req.method} ${req.protocol}://${req.get(
      "host"
    )}${req.originalUrl}`[color]
  );
  next();
}

export default logger;
