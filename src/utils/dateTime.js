// export const formatTime = (dt, timezone) => {
//   const local = new Date((dt + timezone) * 1000);
//   const hours = String(local.getUTCHours()).padStart(2, "0");
//   const minutes = String(local.getUTCMinutes()).padStart(2, "0");
//   return `${hours}:${minutes}`;
// }

// export const formatDate = () => {
//   const now = new Date();
//   const day = String(now.getDate()).padStart(2, "0");
//   const month = String(now.getMonth() + 1).padStart(2, "0");
//   return `${day}.${month}.${now.getFullYear()}`;
// }

// export const formatWeekday = () => {
//   return new Date().toLocaleDateString("en-US", { weekday: "long" });
// }

// export const formatHour = (dt) => {
//   return new Date(dt * 1000).toLocaleTimeString("en-US", { hour: "numeric" });
// }

// export const formatDay = (dt) => {
//   return new Date(dt * 1000).toLocaleDateString("en-US", {
//     weekday: "short",
//     month: "short",
//     day: "numeric",
//   });
// }

// export const getHeroDate = () => {
//   const now = new Date();
//   return {
//     monthYear: now.toLocaleDateString("en-US", { month: "long", year: "numeric" }),
//     weekday: now.toLocaleDateString("en-US", { weekday: "long" }),
//     day: now.getDate(),
//   };
// }

export const formatTime = (dt, timezone) => {
  const date = new Date((dt + timezone) * 1000);

  const hours = String(date.getUTCHours()).padStart(2, "0");
  const minutes = String(date.getUTCMinutes()).padStart(2, "0");

  return `${hours}:${minutes}`;
};

export const formatDate = (dt, timezone) => {
  const date = new Date((dt + timezone) * 1000);

  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const year = date.getUTCFullYear();

  return `${day}.${month}.${year}`;
};

export const formatWeekday = (dt, timezone) => {
  const date = new Date((dt + timezone) * 1000);

  return date.toLocaleDateString("en-US", {
    weekday: "long",
    timeZone: "UTC",
  });
};

export const formatHour = (dt) => {
  return new Date(dt * 1000).toLocaleTimeString("en-US", {
    hour: "numeric",
  });
};

export const formatDay = (dt) => {
  return new Date(dt * 1000).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
};

export const getHeroDate = () => {
  const now = new Date();

  return {
    monthYear: now.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    }),

    weekday: now.toLocaleDateString("en-US", {
      weekday: "long",
    }),

    day: now.getDate(),
  };
};