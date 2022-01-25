import { Button } from "react-bootstrap";
import React from "react";

function OrderProduct({ productImg }) {
  return (
    <div className="track__order__component__top__left__order">
      <img
        src={productImg}
        alt="productImg"
        className="track__order__component__top__img"
      />
      <div className="track__order__component__top__left__content">
        <div className="track__order__component__top__left__content__heading">
          Ajmal Mizyaan for Men
        </div>
        <div className="track__order__component__top__left__content__info">
          By Lorem ipsum dolor By Lorem ipsum dolor By Lorem ipsum dolor
        </div>
      </div>
    </div>
  );
}

export default function TrackOrderProduct({ productImg }) {
  const isMilestone1Done = true;
  const isMilestone2Done = true;
  const isMilestone3Done = true;
  const isMilestone4Done = false;
  return (
    <>
      <div className="track__order__component">
        <div className="track__order__component__top">
          <div className="track__order__component__top__left">
            <OrderProduct productImg={productImg} />
          </div>
          <Button
            veriant="dark"
            className="track__order__component__top__right"
          >
            Cancel Order
          </Button>
        </div>
        <div className="track__order__component__bottom">
          <div className="track__order__component__bottom__milestone">
            <div className="track__order__component__bottom__milestone__active"></div>
            <div className="track__order__component__bottom__milestone__points__1">
              {isMilestone1Done ? (
                <div className="track__order__component__bottom__milestone__points__circle__active">
                  <div className="track__order__component__bottom__milestone__points__circle__info">
                    <div className="track__order__component__bottom__milestone__points__circle__info__heading">
                      Lorem, ipsum.
                    </div>
                    <div className="track__order__component__bottom__milestone__points__circle__info__content">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Veritatis totam, impedit rem error placeat nulla facilis
                      commodi veniam perferendis labore?
                    </div>
                  </div>
                </div>
              ) : (
                <div className="track__order__component__bottom__milestone__points__circle">
                  <div className="track__order__component__bottom__milestone__points__circle__info">
                    <div className="track__order__component__bottom__milestone__points__circle__info__heading">
                      Lorem, ipsum.
                    </div>
                    <div className="track__order__component__bottom__milestone__points__circle__info__content">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Veritatis totam, impedit rem error placeat nulla facilis
                      commodi veniam perferendis labore?
                    </div>
                  </div>
                </div>
              )}
              <div className="track__order__component__bottom__milestone__points__name">
                Shipping
              </div>
            </div>
            <div className="track__order__component__bottom__milestone__points__2">
              {isMilestone2Done ? (
                <div className="track__order__component__bottom__milestone__points__circle__active">
                  <div className="track__order__component__bottom__milestone__points__circle__info">
                    <div className="track__order__component__bottom__milestone__points__circle__info__heading">
                      Lorem, ipsum.
                    </div>
                    <div className="track__order__component__bottom__milestone__points__circle__info__content">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Veritatis totam, impedit rem error placeat nulla facilis
                      commodi veniam perferendis labore?
                    </div>
                  </div>
                </div>
              ) : (
                <div className="track__order__component__bottom__milestone__points__circle">
                  <div className="track__order__component__bottom__milestone__points__circle__info">
                    <div className="track__order__component__bottom__milestone__points__circle__info__heading">
                      Lorem, ipsum.
                    </div>
                    <div className="track__order__component__bottom__milestone__points__circle__info__content">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Veritatis totam, impedit rem error placeat nulla facilis
                      commodi veniam perferendis labore?
                    </div>
                  </div>
                </div>
              )}
              <div className="track__order__component__bottom__milestone__points__name">
                Shipping
              </div>
            </div>
            <div className="track__order__component__bottom__milestone__points__3">
              {isMilestone3Done ? (
                <div className="track__order__component__bottom__milestone__points__circle__active">
                  <div className="track__order__component__bottom__milestone__points__circle__info">
                    <div className="track__order__component__bottom__milestone__points__circle__info__heading">
                      Lorem, ipsum.
                    </div>
                    <div className="track__order__component__bottom__milestone__points__circle__info__content">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Veritatis totam, impedit rem error placeat nulla facilis
                      commodi veniam perferendis labore?
                    </div>
                  </div>
                </div>
              ) : (
                <div className="track__order__component__bottom__milestone__points__circle">
                  <div className="track__order__component__bottom__milestone__points__circle__info">
                    <div className="track__order__component__bottom__milestone__points__circle__info__heading">
                      Lorem, ipsum.
                    </div>
                    <div className="track__order__component__bottom__milestone__points__circle__info__content">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Veritatis totam, impedit rem error placeat nulla facilis
                      commodi veniam perferendis labore?
                    </div>
                  </div>
                </div>
              )}
              <div className="track__order__component__bottom__milestone__points__name">
                Shipping
              </div>
            </div>
            <div className="track__order__component__bottom__milestone__points__4">
              {isMilestone4Done ? (
                <div className="track__order__component__bottom__milestone__points__circle__active">
                  <div className="track__order__component__bottom__milestone__points__circle__info">
                    <div className="track__order__component__bottom__milestone__points__circle__info__heading">
                      Lorem, ipsum.
                    </div>
                    <div className="track__order__component__bottom__milestone__points__circle__info__content">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Veritatis totam, impedit rem error placeat nulla facilis
                      commodi veniam perferendis labore?
                    </div>
                  </div>
                </div>
              ) : (
                <div className="track__order__component__bottom__milestone__points__circle">
                  <div className="track__order__component__bottom__milestone__points__circle__info">
                    <div className="track__order__component__bottom__milestone__points__circle__info__heading">
                      Lorem, ipsum.
                    </div>
                    <div className="track__order__component__bottom__milestone__points__circle__info__content">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Veritatis totam, impedit rem error placeat nulla facilis
                      commodi veniam perferendis labore?
                    </div>
                  </div>
                </div>
              )}
              <div className="track__order__component__bottom__milestone__points__name">
                Shipping
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="track__order__component__line"></div>
    </>
  );
}
