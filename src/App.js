import { ProGallery } from "pro-gallery";
import React, { Fragment } from "react";
import "./styles.css";
export default function App() {
  const items = [
    {
      // Image item:
      itemId: "pic-a",
      mediaUrl: "https://picsum.photos/id/237/200/300",
      metaData: {
        type: "image",
        title: "sample-title",
        description: "sample-description",
        focalPoint: [0, 0],
        link: {
          url: "http://example.com",
          target: "_blank"
        }
      }
    },
    {
      // Another Image item:
      itemId: "pic-b",
      mediaUrl: "https://picsum.photos/id/238/200/300",
      metaData: {
        type: "image",
        title: "sample-title",
        description: "sample-description",
        focalPoint: [0, 0],
        link: {
          url: "http://example.com",
          target: "_blank"
        }
      }
    },
    {
      // Another Image item:
      itemId: "pic-c",
      mediaUrl: "https://picsum.photos/id/239/200/300",
      metaData: {
        type: "image",
        title: "sample-title",
        description: "sample-description",
        focalPoint: [0, 0],
        link: {
          url: "http://example.com",
          target: "_blank"
        }
      }
    },
    {
      // Another Image item:
      itemId: "pic-d",
      mediaUrl: "https://picsum.photos/id/230/200/300",
      metaData: {
        type: "image",
        title: "sample-title",
        description: "sample-description",
        focalPoint: [0, 0],
        link: {
          url: "http://example.com",
          target: "_blank"
        }
      }
    },
    {
      // Another Image item:
      itemId: "pic-e",
      mediaUrl: "https://picsum.photos/id/237/200/300",
      metaData: {
        type: "image",
        title: "sample-title",
        description: "sample-description",
        focalPoint: [0, 0],
        link: {
          url: "http://example.com",
          target: "_blank"
        }
      }
    },
    {
      // Another Image item:
      itemId: "pic-f",
      mediaUrl: "https://picsum.photos/id/237/200/300",
      metaData: {
        type: "image",
        title: "sample-title",
        description: "sample-description",
        focalPoint: [0, 0],
        link: {
          url: "http://example.com",
          target: "_blank"
        }
      }
    },
    {
      // Another Image item:
      itemId: "pic-g",
      mediaUrl: "https://picsum.photos/id/245/200/300",
      metaData: {
        type: "image",
        title: "sample-title",
        description: "sample-description",
        focalPoint: [0, 0],
        link: {
          url: "http://example.com",
          target: "_blank"
        }
      }
    },
    {
      // Another Image item:
      itemId: "pic-h",
      mediaUrl: "https://picsum.photos/id/241/200/300",
      metaData: {
        type: "image",
        title: "sample-title",
        description: "sample-description",
        focalPoint: [0, 0],
        link: {
          url: "http://example.com",
          target: "_blank"
        }
      }
    },
    {
      // Another Image item:
      itemId: "pic-i",
      mediaUrl: "https://picsum.photos/id/257/200/300",
      metaData: {
        type: "image",
        title: "sample-title",
        description: "sample-description",
        focalPoint: [0, 0],
        link: {
          url: "http://example.com",
          target: "_blank"
        }
      }
    },
    {
      // Another Image item:
      itemId: "pic-j",
      mediaUrl: "https://picsum.photos/id/277/200/300",
      metaData: {
        type: "image",
        title: "sample-title",
        description: "sample-description",
        focalPoint: [0, 0],
        link: {
          url: "http://example.com",
          target: "_blank"
        }
      }
    },
    {
      // Another Image item:
      itemId: "pic-k",
      mediaUrl: "https://picsum.photos/id/257/200/300",
      metaData: {
        type: "image",
        title: "sample-title",
        description: "sample-description",
        focalPoint: [0, 0],
        link: {
          url: "http://example.com",
          target: "_blank"
        }
      }
    },
    {
      // Another Image item:
      itemId: "pic-l",
      mediaUrl: "https://picsum.photos/id/427/200/300",
      metaData: {
        type: "image",
        title: "sample-title",
        description: "sample-description",
        focalPoint: [0, 0],
        link: {
          url: "http://example.com",
          target: "_blank"
        }
      }
    },
    {
      // Another Image item:
      itemId: "pic-m",
      mediaUrl: "https://picsum.photos/id/337/200/300",
      metaData: {
        type: "image",
        title: "sample-title",
        description: "sample-description",
        focalPoint: [0, 0],
        link: {
          url: "http://example.com",
          target: "_blank"
        }
      }
    }
  ];
  const customInfoRenderer = (itemProps) => {
    if (window.innerWidth < 750)
      return (
        <span style={{ width: "70%" }} className="img-text">
          {itemProps.title}
        </span>
      );
    else
      return (
        <span style={{ width: "80%" }} className="img-text">
          {itemProps.title}
        </span>
      );
  };
  // The options of the gallery (from the playground current state)
  // const options = {
  //   galleryLayout: window.innerWidth <750 ?2: 2,
  //   scrollDirection: 1    ,
  //   overlayBackground: 'rgba(8,8,8,0.8)',
  //   titlePlacement: 'SHOW_BELOW',
  // }
  const options = {
    galleryLayout: window.innerWidth < 750 ? 2 : 0,
    titlePlacement: "SHOW_ABOVE",
    imageInfoType: "ATTACHED_BACKGROUND",
    scrollDirection: 1,
    scatter: 5,
    groupSize: 2,
    imagePlacementAnimation: "SLIDE"
  };

  // The size of the gallery container. The images will fit themselves in it
  const container = {
    width: window.innerWidth,
    height: window.innerHeight
  };

  // The eventsListener will notify you anytime something has happened in the gallery.
  const eventsListener = (eventName, eventData) => {
    if (eventName === "ITEM_CLICKED") {
      window.parent.postMessage("embed_voucher_image:" + eventData.id, "*");
    }
  };

  // The scrollingElement is usually the window, if you are scrolling inside another element, suplly it here
  const scrollingElement = window;

  const customImageRender = (imageProps) => {
    // console.log(imageProps);
    if (window.innerWidth < 750)
      return (
        <div>
          {" "}
          <img
            style={{
              width: imageProps.style.width / 4,
              height: imageProps.style.height / 4
            }}
            {...imageProps}
          />
          <span style={{ width: "70%" }} className="img-text">
            {imageProps.alt}
          </span>
        </div>
      );
    else
      return (
        <div>
          {" "}
          <img {...imageProps} />
          <span style={{ width: "75%" }} className="img-text">
            {imageProps.alt}
          </span>
        </div>
      );
  };
  return (
    <Fragment>
      <ProGallery
        items={items}
        options={options}
        container={container}
        eventsListener={eventsListener}
        scrollingElement={scrollingElement}
        customImageRenderer={customImageRender}
        customHoverRenderer={customInfoRenderer}
        proGalleryRole="application"
      />
    </Fragment>
  );
}
