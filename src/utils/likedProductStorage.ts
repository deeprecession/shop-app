export default abstract class ProductLikeStorage {
  public static getLiked = (): number[] => {
    const likedProductsString = localStorage.getItem("likedProductsIDs");
    if (!likedProductsString) {
      localStorage.setItem("likedProductsIDs", `[]`);
      return [];
    }

    let likedProductsIDs: number[] = [];
    try {
      likedProductsIDs = JSON.parse(likedProductsString);
    } catch (err) {
      localStorage.setItem("likedProductsIDs", `[]`);
      console.error(err);
      return [];
    }

    return likedProductsIDs;
  };

  public static isLiked = (id: number): boolean => {
    const likedProductsString = localStorage.getItem("likedProductsIDs");
    if (!likedProductsString) {
      return false;
    }

    let likedProductsIDs: number[] = [];
    try {
      likedProductsIDs = JSON.parse(likedProductsString);
    } catch (err) {
      return false;
    }

    return likedProductsIDs.includes(id);
  };

  public static remove = (id: number) => {
    const likedProductsString = localStorage.getItem("likedProductsIDs");
    if (!likedProductsString) {
      return;
    }

    const likedProductsIDs: number[] = JSON.parse(likedProductsString);

    const inxToRemove = likedProductsIDs.indexOf(id);
    if (inxToRemove != -1) {
      const changedLikedProductIDs = likedProductsIDs.filter(
        (curId) => id != curId,
      );
      localStorage.setItem(
        "likedProductsIDs",
        JSON.stringify(changedLikedProductIDs),
      );
    }
  };

  public static add = (id: number) => {
    const likedProductsString = localStorage.getItem("likedProductsIDs");
    if (!likedProductsString) {
      localStorage.setItem("likedProductsIDs", `[${id}]`);
      return;
    }

    let likedProductsIDs: number[] = [];
    try {
      likedProductsIDs = JSON.parse(likedProductsString);
    } catch (err) {
      console.error(err);
    }

    if (!likedProductsIDs.includes(id)) {
      likedProductsIDs.push(id);
      localStorage.setItem(
        "likedProductsIDs",
        JSON.stringify(likedProductsIDs),
      );
    }
  };
}
