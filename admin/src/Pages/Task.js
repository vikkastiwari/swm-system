import React, { Component } from "react";
import { Link } from "react-router-dom";

import Footer from "../Components/Footer/Footer";

class Task extends Component {
  render() {
    return (
      <div id="content" className="main-content">
        <div className="layout-px-spacing">
          <div className="row layout-top-spacing">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="mail-box-container">
                <div className="mail-overlay"></div>

                <div className="tab-title">
                  <div className="row">
                    <div className="col-md-12 col-sm-12 col-12 text-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-clipboard"
                      >
                        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                        <rect
                          x="8"
                          y="2"
                          width="8"
                          height="4"
                          rx="1"
                          ry="1"
                        ></rect>
                      </svg>
                      <h5 className="app-title">Todo List</h5>
                    </div>

                    <div className="todoList-sidebar-scroll">
                      <div className="col-md-12 col-sm-12 col-12 mt-4 pl-0">
                        <ul
                          className="nav nav-pills d-block"
                          id="pills-tab"
                          role="tablist"
                        >
                          <li className="nav-item">
                            <a
                              className="nav-link list-actions active"
                              id="all-list"
                              data-toggle="pill"
                              href="#pills-inbox"
                              role="tab"
                              aria-selected="true"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="feather feather-list"
                              >
                                <line x1="8" y1="6" x2="21" y2="6"></line>
                                <line x1="8" y1="12" x2="21" y2="12"></line>
                                <line x1="8" y1="18" x2="21" y2="18"></line>
                                <line x1="3" y1="6" x2="3" y2="6"></line>
                                <line x1="3" y1="12" x2="3" y2="12"></line>
                                <line x1="3" y1="18" x2="3" y2="18"></line>
                              </svg>{" "}
                              Assigned{" "}
                              <span className="todo-badge badge"></span>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link list-actions"
                              id="todo-task-done"
                              data-toggle="pill"
                              href="#pills-sentmail"
                              role="tab"
                              aria-selected="false"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="feather feather-thumbs-up"
                              >
                                <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                              </svg>{" "}
                              Completed{" "}
                              <span className="todo-badge badge"></span>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link list-actions"
                              id="todo-task-important"
                              data-toggle="pill"
                              href="#pills-important"
                              role="tab"
                              aria-selected="false"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="feather feather-star"
                              >
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                              </svg>{" "}
                              Pending <span className="todo-badge badge"></span>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link list-actions"
                              id="todo-task-trash"
                              data-toggle="pill"
                              href="#pills-trash"
                              role="tab"
                              aria-selected="false"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="feather feather-trash-2"
                              >
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                              </svg>{" "}
                              Over All
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <a className="btn" id="addTask" href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-plus"
                      >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>{" "}
                      New Task
                    </a>
                  </div>
                </div>

                <div id="todo-inbox" className="accordion todo-inbox">
                  <div className="search">
                    <input
                      type="text"
                      className="form-control input-search"
                      placeholder="Search Here..."
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-menu mail-menu d-lg-none"
                    >
                      <line x1="3" y1="12" x2="21" y2="12"></line>
                      <line x1="3" y1="6" x2="21" y2="6"></line>
                      <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                  </div>

                  <div className="todo-box">
                    <div id="ct" className="todo-box-scroll">
                      <div className="todo-item all-list">
                        <div className="todo-item-inner">
                          <div className="n-chk text-center">
                            <label className="new-control new-checkbox checkbox-primary">
                              <input
                                type="checkbox"
                                className="new-control-input inbox-chkbox"
                              />
                              <span className="new-control-indicator"></span>
                            </label>
                          </div>

                          <div className="todo-content">
                            <h5
                              className="todo-heading"
                              data-todoHeading="Meeting with Shaun Park at 4:50pm"
                            >
                              Meeting with Shaun Park at 4:50pm
                            </h5>
                            <p className="meta-date">Aug, 07 2019</p>
                            <p
                              className="todo-text"
                              data-todoHtml="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.</p>"
                              data-todoText='{"ops":[{"insert":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.\n"}]}'
                            >
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Morbi pulvinar feugiat consequat. Duis lacus
                              nibh, sagittis id varius vel, aliquet non augue.
                              Vivamus sem ante, ultrices at ex a, rhoncus
                              ullamcorper tellus. Nunc iaculis eu ligula ac
                              consequat. Orci varius natoque penatibus et magnis
                              dis parturient montes, nascetur ridiculus mus.
                              Vestibulum mattis urna neque, eget posuere lorem
                              tempus non. Suspendisse ac turpis dictum,
                              convallis est ut, posuere sem. Etiam imperdiet
                              aliquam risus, eu commodo urna vestibulum at.
                              Suspendisse malesuada lorem eu sodales aliquam.
                            </p>
                          </div>

                          <div className="priority-dropdown custom-dropdown-icon">
                            <div className="dropdown p-dropdown">
                              <a
                                className="dropdown-toggle warning"
                                href="#"
                                role="button"
                                id="dropdownMenuLink-1"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="true"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  className="feather feather-alert-octagon"
                                >
                                  <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                  <line x1="12" y1="8" x2="12" y2="12"></line>
                                  <line x1="12" y1="16" x2="12" y2="16"></line>
                                </svg>
                              </a>

                              <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuLink-1"
                              >
                                <a
                                  className="dropdown-item danger"
                                  href="javascript:void(0);"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-alert-octagon"
                                  >
                                    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                    <line
                                      x1="12"
                                      y1="16"
                                      x2="12"
                                      y2="16"
                                    ></line>
                                  </svg>{" "}
                                  High
                                </a>
                                <a
                                  className="dropdown-item warning"
                                  href="javascript:void(0);"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-alert-octagon"
                                  >
                                    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                    <line
                                      x1="12"
                                      y1="16"
                                      x2="12"
                                      y2="16"
                                    ></line>
                                  </svg>{" "}
                                  Middle
                                </a>
                                <a
                                  className="dropdown-item primary"
                                  href="javascript:void(0);"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-alert-octagon"
                                  >
                                    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                    <line
                                      x1="12"
                                      y1="16"
                                      x2="12"
                                      y2="16"
                                    ></line>
                                  </svg>{" "}
                                  Low
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className="action-dropdown custom-dropdown-icon">
                            <div className="dropdown">
                              <a
                                className="dropdown-toggle"
                                href="#"
                                role="button"
                                id="dropdownMenuLink-2"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="true"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  className="feather feather-more-vertical"
                                >
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="12" cy="5" r="1"></circle>
                                  <circle cx="12" cy="19" r="1"></circle>
                                </svg>
                              </a>

                              <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuLink-2"
                              >
                                <a
                                  className="edit dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  Edit
                                </a>
                                <a
                                  className="important dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  Important
                                </a>
                                <a
                                  className="dropdown-item delete"
                                  href="javascript:void(0);"
                                >
                                  Delete
                                </a>
                                <a
                                  className="dropdown-item permanent-delete"
                                  href="javascript:void(0);"
                                >
                                  Permanent Delete
                                </a>
                                <a
                                  className="dropdown-item revive"
                                  href="javascript:void(0);"
                                >
                                  Revive Task
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="todo-item all-list">
                        <div className="todo-item-inner">
                          <div className="n-chk text-center">
                            <label className="new-control new-checkbox checkbox-primary">
                              <input
                                type="checkbox"
                                className="new-control-input inbox-chkbox"
                              />
                              <span className="new-control-indicator"></span>
                            </label>
                          </div>

                          <div className="todo-content">
                            <h5
                              className="todo-heading"
                              data-todoHeading="Team meet at Starbucks"
                            >
                              {" "}
                              Team meet at Starbucks
                            </h5>
                            <p className="meta-date">Aug, 07 2019</p>
                            <p
                              className="todo-text"
                              data-todoHtml="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.</p>"
                              data-todoText='{"ops":[{"insert":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.\n"}]}'
                            >
                              {" "}
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Morbi pulvinar feugiat consequat. Duis lacus
                              nibh, sagittis id varius vel, aliquet non augue.
                              Vivamus sem ante, ultrices at ex a, rhoncus
                              ullamcorper tellus. Nunc iaculis eu ligula ac
                              consequat. Orci varius natoque penatibus et magnis
                              dis parturient montes, nascetur ridiculus mus.
                              Vestibulum mattis urna neque, eget posuere lorem
                              tempus non. Suspendisse ac turpis dictum,
                              convallis est ut, posuere sem. Etiam imperdiet
                              aliquam risus, eu commodo urna vestibulum at.
                              Suspendisse malesuada lorem eu sodales aliquam.
                            </p>
                          </div>

                          <div className="priority-dropdown custom-dropdown-icon">
                            <div className="dropdown p-dropdown">
                              <a
                                className="dropdown-toggle primary"
                                href="#"
                                role="button"
                                id="dropdownMenuLink-3"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="true"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  className="feather feather-alert-octagon"
                                >
                                  <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                  <line x1="12" y1="8" x2="12" y2="12"></line>
                                  <line x1="12" y1="16" x2="12" y2="16"></line>
                                </svg>
                              </a>

                              <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuLink-3"
                              >
                                <a
                                  className="dropdown-item danger"
                                  href="javascript:void(0);"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-alert-octagon"
                                  >
                                    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                    <line
                                      x1="12"
                                      y1="16"
                                      x2="12"
                                      y2="16"
                                    ></line>
                                  </svg>{" "}
                                  High
                                </a>
                                <a
                                  className="dropdown-item warning"
                                  href="javascript:void(0);"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-alert-octagon"
                                  >
                                    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                    <line
                                      x1="12"
                                      y1="16"
                                      x2="12"
                                      y2="16"
                                    ></line>
                                  </svg>{" "}
                                  Middle
                                </a>
                                <a
                                  className="dropdown-item primary"
                                  href="javascript:void(0);"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-alert-octagon"
                                  >
                                    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                    <line
                                      x1="12"
                                      y1="16"
                                      x2="12"
                                      y2="16"
                                    ></line>
                                  </svg>{" "}
                                  Low
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className="action-dropdown custom-dropdown-icon">
                            <div className="dropdown">
                              <a
                                className="dropdown-toggle"
                                href="#"
                                role="button"
                                id="dropdownMenuLink-4"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="true"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  className="feather feather-more-vertical"
                                >
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="12" cy="5" r="1"></circle>
                                  <circle cx="12" cy="19" r="1"></circle>
                                </svg>
                              </a>

                              <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuLink-4"
                              >
                                <a
                                  className="edit dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  Edit
                                </a>
                                <a
                                  className="important dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  Important
                                </a>
                                <a
                                  className="dropdown-item delete"
                                  href="javascript:void(0);"
                                >
                                  Delete
                                </a>
                                <a
                                  className="dropdown-item permanent-delete"
                                  href="javascript:void(0);"
                                >
                                  Permanent Delete
                                </a>
                                <a
                                  className="dropdown-item revive"
                                  href="javascript:void(0);"
                                >
                                  Revive Task
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="todo-item all-list todo-task-done">
                        <div className="todo-item-inner">
                          <div className="n-chk text-center">
                            <label className="new-control new-checkbox checkbox-primary">
                              <input
                                type="checkbox"
                                className="new-control-input inbox-chkbox"
                                checked
                              />
                              <span className="new-control-indicator"></span>
                            </label>
                          </div>

                          <div className="todo-content">
                            <h5
                              className="todo-heading"
                              data-todoHeading="Meet Lisa to discuss project details"
                            >
                              {" "}
                              Meet Lisa to discuss project details
                            </h5>
                            <p className="meta-date">Aug, 05 2019</p>
                            <p
                              className="todo-text"
                              data-todoHtml="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.</p>"
                              data-todoText='{"ops":[{"insert":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.\n"}]}'
                            >
                              {" "}
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Morbi pulvinar feugiat consequat. Duis lacus
                              nibh, sagittis id varius vel, aliquet non augue.
                              Vivamus sem ante, ultrices at ex a, rhoncus
                              ullamcorper tellus. Nunc iaculis eu ligula ac
                              consequat. Orci varius natoque penatibus et magnis
                              dis parturient montes, nascetur ridiculus mus.
                              Vestibulum mattis urna neque, eget posuere lorem
                              tempus non. Suspendisse ac turpis dictum,
                              convallis est ut, posuere sem. Etiam imperdiet
                              aliquam risus, eu commodo urna vestibulum at.
                              Suspendisse malesuada lorem eu sodales aliquam.
                            </p>
                          </div>

                          <div className="priority-dropdown custom-dropdown-icon">
                            <div className="dropdown p-dropdown">
                              <a
                                className="dropdown-toggle warning"
                                href="#"
                                role="button"
                                id="dropdownMenuLink-5"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="true"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  className="feather feather-alert-octagon"
                                >
                                  <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                  <line x1="12" y1="8" x2="12" y2="12"></line>
                                  <line x1="12" y1="16" x2="12" y2="16"></line>
                                </svg>
                              </a>
                              <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuLink-5"
                              >
                                <a
                                  className="dropdown-item danger"
                                  href="javascript:void(0);"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-alert-octagon"
                                  >
                                    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                    <line
                                      x1="12"
                                      y1="16"
                                      x2="12"
                                      y2="16"
                                    ></line>
                                  </svg>{" "}
                                  High
                                </a>
                                <a
                                  className="dropdown-item warning"
                                  href="javascript:void(0);"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-alert-octagon"
                                  >
                                    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                    <line
                                      x1="12"
                                      y1="16"
                                      x2="12"
                                      y2="16"
                                    ></line>
                                  </svg>{" "}
                                  Middle
                                </a>
                                <a
                                  className="dropdown-item primary"
                                  href="javascript:void(0);"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-alert-octagon"
                                  >
                                    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                    <line
                                      x1="12"
                                      y1="16"
                                      x2="12"
                                      y2="16"
                                    ></line>
                                  </svg>{" "}
                                  Low
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className="action-dropdown custom-dropdown-icon">
                            <div className="dropdown">
                              <a
                                className="dropdown-toggle"
                                href="#"
                                role="button"
                                id="dropdownMenuLink-6"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="true"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  className="feather feather-more-vertical"
                                >
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="12" cy="5" r="1"></circle>
                                  <circle cx="12" cy="19" r="1"></circle>
                                </svg>
                              </a>
                              <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuLink-6"
                              >
                                <a
                                  className="edit dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  Edit
                                </a>
                                <a
                                  className="important dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  Important
                                </a>
                                <a
                                  className="dropdown-item delete"
                                  href="javascript:void(0);"
                                >
                                  Delete
                                </a>
                                <a
                                  className="dropdown-item permanent-delete"
                                  href="javascript:void(0);"
                                >
                                  Permanent Delete
                                </a>
                                <a
                                  className="dropdown-item revive"
                                  href="javascript:void(0);"
                                >
                                  Revive Task
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="todo-item all-list">
                        <div className="todo-item-inner">
                          <div className="n-chk text-center">
                            <label className="new-control new-checkbox checkbox-primary">
                              <input
                                type="checkbox"
                                className="new-control-input inbox-chkbox"
                              />
                              <span className="new-control-indicator"></span>
                            </label>
                          </div>

                          <div className="todo-content">
                            <h5
                              className="todo-heading"
                              data-todoHeading="Download Complete"
                            >
                              {" "}
                              Download Complete
                            </h5>
                            <p className="meta-date">Aug, 03 2019</p>
                            <p
                              className="todo-text"
                              data-todoHtml="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.</p>"
                              data-todoText='{"ops":[{"insert":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.\n"}]}'
                            >
                              {" "}
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Morbi pulvinar feugiat consequat. Duis lacus
                              nibh, sagittis id varius vel, aliquet non augue.
                              Vivamus sem ante, ultrices at ex a, rhoncus
                              ullamcorper tellus. Nunc iaculis eu ligula ac
                              consequat. Orci varius natoque penatibus et magnis
                              dis parturient montes, nascetur ridiculus mus.
                              Vestibulum mattis urna neque, eget posuere lorem
                              tempus non. Suspendisse ac turpis dictum,
                              convallis est ut, posuere sem. Etiam imperdiet
                              aliquam risus, eu commodo urna vestibulum at.
                              Suspendisse malesuada lorem eu sodales aliquam.
                            </p>
                          </div>

                          <div className="priority-dropdown custom-dropdown-icon">
                            <div className="dropdown p-dropdown">
                              <a
                                className="dropdown-toggle primary"
                                href="#"
                                role="button"
                                id="dropdownMenuLink-24"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="true"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  className="feather feather-alert-octagon"
                                >
                                  <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                  <line x1="12" y1="8" x2="12" y2="12"></line>
                                  <line x1="12" y1="16" x2="12" y2="16"></line>
                                </svg>
                              </a>

                              <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuLink-24"
                              >
                                <a
                                  className="dropdown-item danger"
                                  href="javascript:void(0);"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-alert-octagon"
                                  >
                                    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                    <line
                                      x1="12"
                                      y1="16"
                                      x2="12"
                                      y2="16"
                                    ></line>
                                  </svg>{" "}
                                  High
                                </a>
                                <a
                                  className="dropdown-item warning"
                                  href="javascript:void(0);"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-alert-octagon"
                                  >
                                    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                    <line
                                      x1="12"
                                      y1="16"
                                      x2="12"
                                      y2="16"
                                    ></line>
                                  </svg>{" "}
                                  Middle
                                </a>
                                <a
                                  className="dropdown-item primary"
                                  href="javascript:void(0);"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-alert-octagon"
                                  >
                                    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                    <line
                                      x1="12"
                                      y1="16"
                                      x2="12"
                                      y2="16"
                                    ></line>
                                  </svg>{" "}
                                  Low
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className="action-dropdown custom-dropdown-icon">
                            <div className="dropdown">
                              <a
                                className="dropdown-toggle"
                                href="#"
                                role="button"
                                id="dropdownMenuLink-7"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="true"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  className="feather feather-more-vertical"
                                >
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="12" cy="5" r="1"></circle>
                                  <circle cx="12" cy="19" r="1"></circle>
                                </svg>
                              </a>
                              <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuLink-7"
                              >
                                <a
                                  className="edit dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  Edit
                                </a>
                                <a
                                  className="important dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  Important
                                </a>
                                <a
                                  className="dropdown-item delete"
                                  href="javascript:void(0);"
                                >
                                  Delete
                                </a>
                                <a
                                  className="dropdown-item permanent-delete"
                                  href="javascript:void(0);"
                                >
                                  Permanent Delete
                                </a>
                                <a
                                  className="dropdown-item revive"
                                  href="javascript:void(0);"
                                >
                                  Revive Task
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="todo-item all-list todo-task-important">
                        <div className="todo-item-inner">
                          <div className="n-chk text-center">
                            <label className="new-control new-checkbox checkbox-primary">
                              <input
                                type="checkbox"
                                className="new-control-input inbox-chkbox"
                              />
                              <span className="new-control-indicator"></span>
                            </label>
                          </div>

                          <div className="todo-content">
                            <h5
                              className="todo-heading"
                              data-todoHeading="Conference call with Marketing Manager"
                            >
                              {" "}
                              Conference call with Marketing Manager
                            </h5>
                            <p className="meta-date">Aug, 02 2019</p>
                            <p
                              className="todo-text"
                              data-todoHtml="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.</p>"
                              data-todoText='{"ops":[{"insert":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.\n"}]}'
                            >
                              {" "}
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Morbi pulvinar feugiat consequat. Duis lacus
                              nibh, sagittis id varius vel, aliquet non augue.
                              Vivamus sem ante, ultrices at ex a, rhoncus
                              ullamcorper tellus. Nunc iaculis eu ligula ac
                              consequat. Orci varius natoque penatibus et magnis
                              dis parturient montes, nascetur ridiculus mus.
                              Vestibulum mattis urna neque, eget posuere lorem
                              tempus non. Suspendisse ac turpis dictum,
                              convallis est ut, posuere sem. Etiam imperdiet
                              aliquam risus, eu commodo urna vestibulum at.
                              Suspendisse malesuada lorem eu sodales aliquam.
                            </p>
                          </div>

                          <div className="priority-dropdown custom-dropdown-icon">
                            <div className="dropdown p-dropdown">
                              <a
                                className="dropdown-toggle danger"
                                href="#"
                                role="button"
                                id="dropdownMenuLink-8"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="true"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  className="feather feather-alert-octagon"
                                >
                                  <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                  <line x1="12" y1="8" x2="12" y2="12"></line>
                                  <line x1="12" y1="16" x2="12" y2="16"></line>
                                </svg>
                              </a>

                              <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuLink-8"
                              >
                                <a
                                  className="dropdown-item danger"
                                  href="javascript:void(0);"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-alert-octagon"
                                  >
                                    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                    <line
                                      x1="12"
                                      y1="16"
                                      x2="12"
                                      y2="16"
                                    ></line>
                                  </svg>{" "}
                                  High
                                </a>
                                <a
                                  className="dropdown-item warning"
                                  href="javascript:void(0);"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-alert-octagon"
                                  >
                                    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                    <line
                                      x1="12"
                                      y1="16"
                                      x2="12"
                                      y2="16"
                                    ></line>
                                  </svg>{" "}
                                  Middle
                                </a>
                                <a
                                  className="dropdown-item primary"
                                  href="javascript:void(0);"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-alert-octagon"
                                  >
                                    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                    <line
                                      x1="12"
                                      y1="16"
                                      x2="12"
                                      y2="16"
                                    ></line>
                                  </svg>{" "}
                                  Low
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className="action-dropdown custom-dropdown-icon">
                            <div className="dropdown">
                              <a
                                className="dropdown-toggle"
                                href="#"
                                role="button"
                                id="dropdownMenuLink-9"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="true"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  className="feather feather-more-vertical"
                                >
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="12" cy="5" r="1"></circle>
                                  <circle cx="12" cy="19" r="1"></circle>
                                </svg>
                              </a>

                              <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuLink-9"
                              >
                                <a
                                  className="edit dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  Edit
                                </a>
                                <a
                                  className="important dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  Back to List
                                </a>
                                <a
                                  className="dropdown-item delete"
                                  href="javascript:void(0);"
                                >
                                  Delete
                                </a>
                                <a
                                  className="dropdown-item permanent-delete"
                                  href="javascript:void(0);"
                                >
                                  Permanent Delete
                                </a>
                                <a
                                  className="dropdown-item revive"
                                  href="javascript:void(0);"
                                >
                                  Revive Task
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="todo-item all-list todo-task-important">
                        <div className="todo-item-inner">
                          <div className="n-chk text-center">
                            <label className="new-control new-checkbox checkbox-primary">
                              <input
                                type="checkbox"
                                className="new-control-input inbox-chkbox"
                              />
                              <span className="new-control-indicator"></span>
                            </label>
                          </div>

                          <div className="todo-content">
                            <h5
                              className="todo-heading"
                              data-todoHeading="New User Registered"
                            >
                              {" "}
                              New User Registered
                            </h5>
                            <p className="meta-date">Aug, 01 2019</p>
                            <p
                              className="todo-text"
                              data-todoHtml="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.</p>"
                              data-todoText='{"ops":[{"insert":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.\n"}]}'
                            >
                              {" "}
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Morbi pulvinar feugiat consequat. Duis lacus
                              nibh, sagittis id varius vel, aliquet non augue.
                              Vivamus sem ante, ultrices at ex a, rhoncus
                              ullamcorper tellus. Nunc iaculis eu ligula ac
                              consequat. Orci varius natoque penatibus et magnis
                              dis parturient montes, nascetur ridiculus mus.
                              Vestibulum mattis urna neque, eget posuere lorem
                              tempus non. Suspendisse ac turpis dictum,
                              convallis est ut, posuere sem. Etiam imperdiet
                              aliquam risus, eu commodo urna vestibulum at.
                              Suspendisse malesuada lorem eu sodales aliquam.
                            </p>
                          </div>

                          <div className="priority-dropdown custom-dropdown-icon">
                            <div className="dropdown p-dropdown">
                              <a
                                className="dropdown-toggle warning"
                                href="#"
                                role="button"
                                id="dropdownMenuLink-10"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="true"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  className="feather feather-alert-octagon"
                                >
                                  <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                  <line x1="12" y1="8" x2="12" y2="12"></line>
                                  <line x1="12" y1="16" x2="12" y2="16"></line>
                                </svg>
                              </a>

                              <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuLink-10"
                              >
                                <a
                                  className="dropdown-item danger"
                                  href="javascript:void(0);"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-alert-octagon"
                                  >
                                    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                    <line
                                      x1="12"
                                      y1="16"
                                      x2="12"
                                      y2="16"
                                    ></line>
                                  </svg>{" "}
                                  High
                                </a>
                                <a
                                  className="dropdown-item warning"
                                  href="javascript:void(0);"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-alert-octagon"
                                  >
                                    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                    <line
                                      x1="12"
                                      y1="16"
                                      x2="12"
                                      y2="16"
                                    ></line>
                                  </svg>{" "}
                                  Middle
                                </a>
                                <a
                                  className="dropdown-item primary"
                                  href="javascript:void(0);"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-alert-octagon"
                                  >
                                    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                    <line
                                      x1="12"
                                      y1="16"
                                      x2="12"
                                      y2="16"
                                    ></line>
                                  </svg>{" "}
                                  Low
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className="action-dropdown custom-dropdown-icon">
                            <div className="dropdown">
                              <a
                                className="dropdown-toggle"
                                href="#"
                                role="button"
                                id="dropdownMenuLink-11"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="true"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  className="feather feather-more-vertical"
                                >
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="12" cy="5" r="1"></circle>
                                  <circle cx="12" cy="19" r="1"></circle>
                                </svg>
                              </a>

                              <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuLink-11"
                              >
                                <a
                                  className="edit dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  Edit
                                </a>
                                <a
                                  className="important dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  Back to List
                                </a>
                                <a
                                  className="dropdown-item delete"
                                  href="javascript:void(0);"
                                >
                                  Delete
                                </a>
                                <a
                                  className="dropdown-item permanent-delete"
                                  href="javascript:void(0);"
                                >
                                  Permanent Delete
                                </a>
                                <a
                                  className="dropdown-item revive"
                                  href="javascript:void(0);"
                                >
                                  Revive Task
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="todo-item all-list">
                        <div className="todo-item-inner">
                          <div className="n-chk text-center">
                            <label className="new-control new-checkbox checkbox-primary">
                              <input
                                type="checkbox"
                                className="new-control-input inbox-chkbox"
                              />
                              <span className="new-control-indicator"></span>
                            </label>
                          </div>

                          <div className="todo-content">
                            <h5
                              className="todo-heading"
                              data-todoHeading="New User Registered"
                            >
                              {" "}
                              Fix issues in new project
                            </h5>
                            <p className="meta-date">Aug, 01 2019</p>
                            <p
                              className="todo-text"
                              data-todoHtml="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.</p>"
                              data-todoText='{"ops":[{"insert":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.\n"}]}'
                            >
                              {" "}
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Morbi pulvinar feugiat consequat. Duis lacus
                              nibh, sagittis id varius vel, aliquet non augue.
                              Vivamus sem ante, ultrices at ex a, rhoncus
                              ullamcorper tellus. Nunc iaculis eu ligula ac
                              consequat. Orci varius natoque penatibus et magnis
                              dis parturient montes, nascetur ridiculus mus.
                              Vestibulum mattis urna neque, eget posuere lorem
                              tempus non. Suspendisse ac turpis dictum,
                              convallis est ut, posuere sem. Etiam imperdiet
                              aliquam risus, eu commodo urna vestibulum at.
                              Suspendisse malesuada lorem eu sodales aliquam.
                            </p>
                          </div>

                          <div className="priority-dropdown custom-dropdown-icon">
                            <div className="dropdown p-dropdown">
                              <a
                                className="dropdown-toggle warning"
                                href="#"
                                role="button"
                                id="dropdownMenuLink-12"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="true"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  className="feather feather-alert-octagon"
                                >
                                  <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                  <line x1="12" y1="8" x2="12" y2="12"></line>
                                  <line x1="12" y1="16" x2="12" y2="16"></line>
                                </svg>
                              </a>

                              <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuLink-12"
                              >
                                <a
                                  className="dropdown-item danger"
                                  href="javascript:void(0);"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-alert-octagon"
                                  >
                                    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                    <line
                                      x1="12"
                                      y1="16"
                                      x2="12"
                                      y2="16"
                                    ></line>
                                  </svg>{" "}
                                  High
                                </a>
                                <a
                                  className="dropdown-item warning"
                                  href="javascript:void(0);"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-alert-octagon"
                                  >
                                    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                    <line
                                      x1="12"
                                      y1="16"
                                      x2="12"
                                      y2="16"
                                    ></line>
                                  </svg>{" "}
                                  Middle
                                </a>
                                <a
                                  className="dropdown-item primary"
                                  href="javascript:void(0);"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-alert-octagon"
                                  >
                                    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                    <line
                                      x1="12"
                                      y1="16"
                                      x2="12"
                                      y2="16"
                                    ></line>
                                  </svg>{" "}
                                  Low
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className="action-dropdown custom-dropdown-icon">
                            <div className="dropdown">
                              <a
                                className="dropdown-toggle"
                                href="#"
                                role="button"
                                id="dropdownMenuLink-13"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="true"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  className="feather feather-more-vertical"
                                >
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="12" cy="5" r="1"></circle>
                                  <circle cx="12" cy="19" r="1"></circle>
                                </svg>
                              </a>

                              <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuLink-13"
                              >
                                <a
                                  className="edit dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  Edit
                                </a>
                                <a
                                  className="important dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  Important
                                </a>
                                <a
                                  className="dropdown-item delete"
                                  href="javascript:void(0);"
                                >
                                  Delete
                                </a>
                                <a
                                  className="dropdown-item permanent-delete"
                                  href="javascript:void(0);"
                                >
                                  Permanent Delete
                                </a>
                                <a
                                  className="dropdown-item revive"
                                  href="javascript:void(0);"
                                >
                                  Revive Task
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="todo-item all-list todo-task-important">
                        <div className="todo-item-inner">
                          <div className="n-chk text-center">
                            <label className="new-control new-checkbox checkbox-primary">
                              <input
                                type="checkbox"
                                className="new-control-input inbox-chkbox"
                              />
                              <span className="new-control-indicator"></span>
                            </label>
                          </div>

                          <div className="todo-content">
                            <h5
                              className="todo-heading"
                              data-todoHeading="New User Registered"
                            >
                              {" "}
                              Check All functionality
                            </h5>
                            <p className="meta-date">Aug, 01 2019</p>
                            <p
                              className="todo-text"
                              data-todoHtml="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.</p>"
                              data-todoText='{"ops":[{"insert":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.\n"}]}'
                            >
                              {" "}
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Morbi pulvinar feugiat consequat. Duis lacus
                              nibh, sagittis id varius vel, aliquet non augue.
                              Vivamus sem ante, ultrices at ex a, rhoncus
                              ullamcorper tellus. Nunc iaculis eu ligula ac
                              consequat. Orci varius natoque penatibus et magnis
                              dis parturient montes, nascetur ridiculus mus.
                              Vestibulum mattis urna neque, eget posuere lorem
                              tempus non. Suspendisse ac turpis dictum,
                              convallis est ut, posuere sem. Etiam imperdiet
                              aliquam risus, eu commodo urna vestibulum at.
                              Suspendisse malesuada lorem eu sodales aliquam.
                            </p>
                          </div>

                          <div className="priority-dropdown custom-dropdown-icon">
                            <div className="dropdown p-dropdown">
                              <a
                                className="dropdown-toggle warning"
                                href="#"
                                role="button"
                                id="dropdownMenuLink-14"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="true"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  className="feather feather-alert-octagon"
                                >
                                  <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                  <line x1="12" y1="8" x2="12" y2="12"></line>
                                  <line x1="12" y1="16" x2="12" y2="16"></line>
                                </svg>
                              </a>

                              <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuLink-14"
                              >
                                <a
                                  className="dropdown-item danger"
                                  href="javascript:void(0);"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-alert-octagon"
                                  >
                                    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                    <line
                                      x1="12"
                                      y1="16"
                                      x2="12"
                                      y2="16"
                                    ></line>
                                  </svg>{" "}
                                  High
                                </a>
                                <a
                                  className="dropdown-item warning"
                                  href="javascript:void(0);"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-alert-octagon"
                                  >
                                    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                    <line
                                      x1="12"
                                      y1="16"
                                      x2="12"
                                      y2="16"
                                    ></line>
                                  </svg>{" "}
                                  Middle
                                </a>
                                <a
                                  className="dropdown-item primary"
                                  href="javascript:void(0);"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-alert-octagon"
                                  >
                                    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                    <line
                                      x1="12"
                                      y1="16"
                                      x2="12"
                                      y2="16"
                                    ></line>
                                  </svg>{" "}
                                  Low
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className="action-dropdown custom-dropdown-icon">
                            <div className="dropdown">
                              <a
                                className="dropdown-toggle"
                                href="#"
                                role="button"
                                id="dropdownMenuLink-15"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="true"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  className="feather feather-more-vertical"
                                >
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="12" cy="5" r="1"></circle>
                                  <circle cx="12" cy="19" r="1"></circle>
                                </svg>
                              </a>

                              <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuLink-15"
                              >
                                <a
                                  className="edit dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  Edit
                                </a>
                                <a
                                  className="important dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  Back to List
                                </a>
                                <a
                                  className="dropdown-item delete"
                                  href="javascript:void(0);"
                                >
                                  Delete
                                </a>
                                <a
                                  className="dropdown-item permanent-delete"
                                  href="javascript:void(0);"
                                >
                                  Permanent Delete
                                </a>
                                <a
                                  className="dropdown-item revive"
                                  href="javascript:void(0);"
                                >
                                  Revive Task
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="todo-item all-list todo-task-done">
                        <div className="todo-item-inner">
                          <div className="n-chk text-center">
                            <label className="new-control new-checkbox checkbox-primary">
                              <input
                                type="checkbox"
                                className="new-control-input inbox-chkbox"
                              />
                              <span className="new-control-indicator"></span>
                            </label>
                          </div>

                          <div className="todo-content">
                            <h5
                              className="todo-heading"
                              data-todoHeading="New User Registered"
                            >
                              {" "}
                              Check Repository
                            </h5>
                            <p className="meta-date">Aug, 01 2019</p>
                            <p
                              className="todo-text"
                              data-todoHtml="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.</p>"
                              data-todoText='{"ops":[{"insert":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.\n"}]}'
                            >
                              {" "}
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Morbi pulvinar feugiat consequat. Duis lacus
                              nibh, sagittis id varius vel, aliquet non augue.
                              Vivamus sem ante, ultrices at ex a, rhoncus
                              ullamcorper tellus. Nunc iaculis eu ligula ac
                              consequat. Orci varius natoque penatibus et magnis
                              dis parturient montes, nascetur ridiculus mus.
                              Vestibulum mattis urna neque, eget posuere lorem
                              tempus non. Suspendisse ac turpis dictum,
                              convallis est ut, posuere sem. Etiam imperdiet
                              aliquam risus, eu commodo urna vestibulum at.
                              Suspendisse malesuada lorem eu sodales aliquam.
                            </p>
                          </div>

                          <div className="priority-dropdown custom-dropdown-icon">
                            <div className="dropdown p-dropdown">
                              <a
                                className="dropdown-toggle warning"
                                href="#"
                                role="button"
                                id="dropdownMenuLink-16"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="true"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  className="feather feather-alert-octagon"
                                >
                                  <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                  <line x1="12" y1="8" x2="12" y2="12"></line>
                                  <line x1="12" y1="16" x2="12" y2="16"></line>
                                </svg>
                              </a>

                              <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuLink-16"
                              >
                                <a
                                  className="dropdown-item danger"
                                  href="javascript:void(0);"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-alert-octagon"
                                  >
                                    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                    <line
                                      x1="12"
                                      y1="16"
                                      x2="12"
                                      y2="16"
                                    ></line>
                                  </svg>{" "}
                                  High
                                </a>
                                <a
                                  className="dropdown-item warning"
                                  href="javascript:void(0);"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-alert-octagon"
                                  >
                                    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                    <line
                                      x1="12"
                                      y1="16"
                                      x2="12"
                                      y2="16"
                                    ></line>
                                  </svg>{" "}
                                  Middle
                                </a>
                                <a
                                  className="dropdown-item primary"
                                  href="javascript:void(0);"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-alert-octagon"
                                  >
                                    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                    <line
                                      x1="12"
                                      y1="16"
                                      x2="12"
                                      y2="16"
                                    ></line>
                                  </svg>{" "}
                                  Low
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className="action-dropdown custom-dropdown-icon">
                            <div className="dropdown">
                              <a
                                className="dropdown-toggle"
                                href="#"
                                role="button"
                                id="dropdownMenuLink-17"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="true"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  className="feather feather-more-vertical"
                                >
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="12" cy="5" r="1"></circle>
                                  <circle cx="12" cy="19" r="1"></circle>
                                </svg>
                              </a>

                              <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuLink-17"
                              >
                                <a
                                  className="edit dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  Edit
                                </a>
                                <a
                                  className="important dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  Important
                                </a>
                                <a
                                  className="dropdown-item delete"
                                  href="javascript:void(0);"
                                >
                                  Delete
                                </a>
                                <a
                                  className="dropdown-item permanent-delete"
                                  href="javascript:void(0);"
                                >
                                  Permanent Delete
                                </a>
                                <a
                                  className="dropdown-item revive"
                                  href="javascript:void(0);"
                                >
                                  Revive Task
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="todo-item todo-task-trash">
                        <div className="todo-item-inner">
                          <div className="n-chk text-center">
                            <label className="new-control new-checkbox checkbox-primary">
                              <input
                                type="checkbox"
                                className="new-control-input inbox-chkbox"
                              />
                              <span className="new-control-indicator"></span>
                            </label>
                          </div>

                          <div className="todo-content">
                            <h5
                              className="todo-heading"
                              data-todoHeading="New User Registered"
                            >
                              Trashed Tasks
                            </h5>
                            <p className="meta-date">Sep, 31 2019</p>
                            <p
                              className="todo-text"
                              data-todoHtml="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.</p>"
                              data-todoText="This task is for trashed demo. Now, click the dotted dropdown and select the revive option to re-list the task from trash to all list or select the premanent delete option to permantly delete it."
                            >
                              This task is for trashed demo. Now, click the
                              dotted dropdown and select the revive option to
                              re-list the task from trash to all list or select
                              the premanent delete option to permantly delete
                              it.{" "}
                            </p>
                          </div>

                          <div className="priority-dropdown custom-dropdown-icon">
                            <div className="dropdown p-dropdown">
                              <a
                                className="dropdown-toggle warning"
                                href="#"
                                role="button"
                                id="dropdownMenuLink-18"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="true"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  className="feather feather-alert-octagon"
                                >
                                  <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                  <line x1="12" y1="8" x2="12" y2="12"></line>
                                  <line x1="12" y1="16" x2="12" y2="16"></line>
                                </svg>
                              </a>

                              <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuLink-18"
                              >
                                <a
                                  className="dropdown-item danger"
                                  href="javascript:void(0);"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-alert-octagon"
                                  >
                                    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                    <line
                                      x1="12"
                                      y1="16"
                                      x2="12"
                                      y2="16"
                                    ></line>
                                  </svg>{" "}
                                  High
                                </a>
                                <a
                                  className="dropdown-item warning"
                                  href="javascript:void(0);"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-alert-octagon"
                                  >
                                    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                    <line
                                      x1="12"
                                      y1="16"
                                      x2="12"
                                      y2="16"
                                    ></line>
                                  </svg>{" "}
                                  Middle
                                </a>
                                <a
                                  className="dropdown-item primary"
                                  href="javascript:void(0);"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-alert-octagon"
                                  >
                                    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                    <line
                                      x1="12"
                                      y1="16"
                                      x2="12"
                                      y2="16"
                                    ></line>
                                  </svg>{" "}
                                  Low
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className="action-dropdown custom-dropdown-icon">
                            <div className="dropdown">
                              <a
                                className="dropdown-toggle"
                                href="#"
                                role="button"
                                id="dropdownMenuLink-19"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="true"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  className="feather feather-more-vertical"
                                >
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="12" cy="5" r="1"></circle>
                                  <circle cx="12" cy="19" r="1"></circle>
                                </svg>
                              </a>

                              <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuLink-19"
                              >
                                <a
                                  className="edit dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  Edit
                                </a>
                                <a
                                  className="important dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  Important
                                </a>
                                <a
                                  className="dropdown-item delete"
                                  href="javascript:void(0);"
                                >
                                  Delete
                                </a>
                                <a
                                  className="dropdown-item permanent-delete"
                                  href="javascript:void(0);"
                                >
                                  Permanent Delete
                                </a>
                                <a
                                  className="dropdown-item revive"
                                  href="javascript:void(0);"
                                >
                                  Revive Task
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="todo-item todo-task-trash">
                        <div className="todo-item-inner">
                          <div className="n-chk text-center">
                            <label className="new-control new-checkbox checkbox-primary">
                              <input
                                type="checkbox"
                                className="new-control-input inbox-chkbox"
                              />
                              <span className="new-control-indicator"></span>
                            </label>
                          </div>

                          <div className="todo-content">
                            <h5
                              className="todo-heading"
                              data-todoHeading="New User Registered"
                            >
                              Trashed Tasks 2
                            </h5>
                            <p className="meta-date">Sep, 31 2019</p>
                            <p
                              className="todo-text"
                              data-todoHtml="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.</p>"
                              data-todoText="This task is for trashed demo. Now, click the dotted dropdown and select the revive option to re-list the task from trash to all list or select the premanent delete option to permantly delete it."
                            >
                              This task is for trashed demo. Now, click the
                              dotted dropdown and select the revive option to
                              re-list the task from trash to all list or select
                              the premanent delete option to permantly delete
                              it.{" "}
                            </p>
                          </div>

                          <div className="priority-dropdown custom-dropdown-icon">
                            <div className="dropdown p-dropdown">
                              <a
                                className="dropdown-toggle warning"
                                href="#"
                                role="button"
                                id="dropdownMenuLink-20"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="true"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  className="feather feather-alert-octagon"
                                >
                                  <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                  <line x1="12" y1="8" x2="12" y2="12"></line>
                                  <line x1="12" y1="16" x2="12" y2="16"></line>
                                </svg>
                              </a>

                              <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuLink-20"
                              >
                                <a
                                  className="dropdown-item danger"
                                  href="javascript:void(0);"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-alert-octagon"
                                  >
                                    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                    <line
                                      x1="12"
                                      y1="16"
                                      x2="12"
                                      y2="16"
                                    ></line>
                                  </svg>{" "}
                                  High
                                </a>
                                <a
                                  className="dropdown-item warning"
                                  href="javascript:void(0);"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-alert-octagon"
                                  >
                                    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                    <line
                                      x1="12"
                                      y1="16"
                                      x2="12"
                                      y2="16"
                                    ></line>
                                  </svg>{" "}
                                  Middle
                                </a>
                                <a
                                  className="dropdown-item primary"
                                  href="javascript:void(0);"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-alert-octagon"
                                  >
                                    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                    <line
                                      x1="12"
                                      y1="16"
                                      x2="12"
                                      y2="16"
                                    ></line>
                                  </svg>{" "}
                                  Low
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className="action-dropdown custom-dropdown-icon">
                            <div className="dropdown">
                              <a
                                className="dropdown-toggle"
                                href="#"
                                role="button"
                                id="dropdownMenuLink-21"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="true"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  className="feather feather-more-vertical"
                                >
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="12" cy="5" r="1"></circle>
                                  <circle cx="12" cy="19" r="1"></circle>
                                </svg>
                              </a>

                              <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuLink-21"
                              >
                                <a
                                  className="edit dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  Edit
                                </a>
                                <a
                                  className="important dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  Important
                                </a>
                                <a
                                  className="dropdown-item delete"
                                  href="javascript:void(0);"
                                >
                                  Delete
                                </a>
                                <a
                                  className="dropdown-item permanent-delete"
                                  href="javascript:void(0);"
                                >
                                  Permanent Delete
                                </a>
                                <a
                                  className="dropdown-item revive"
                                  href="javascript:void(0);"
                                >
                                  Revive Task
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="todo-item todo-task-trash">
                        <div className="todo-item-inner">
                          <div className="n-chk text-center">
                            <label className="new-control new-checkbox checkbox-primary">
                              <input
                                type="checkbox"
                                className="new-control-input inbox-chkbox"
                              />
                              <span className="new-control-indicator"></span>
                            </label>
                          </div>

                          <div className="todo-content">
                            <h5
                              className="todo-heading"
                              data-todoHeading="New User Registered"
                            >
                              Trashed Tasks 3
                            </h5>
                            <p className="meta-date">Sep, 31 2019</p>
                            <p
                              className="todo-text"
                              data-todoHtml="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.</p>"
                              data-todoText="This task is for trashed demo. Now, click the dotted dropdown and select the revive option to re-list the task from trash to all list or select the premanent delete option to permantly delete it."
                            >
                              This task is for trashed demo. Now, click the
                              dotted dropdown and select the revive option to
                              re-list the task from trash to all list or select
                              the premanent delete option to permantly delete
                              it.{" "}
                            </p>
                          </div>

                          <div className="priority-dropdown custom-dropdown-icon">
                            <div className="dropdown p-dropdown">
                              <a
                                className="dropdown-toggle warning"
                                href="#"
                                role="button"
                                id="dropdownMenuLink-22"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="true"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  className="feather feather-alert-octagon"
                                >
                                  <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                  <line x1="12" y1="8" x2="12" y2="12"></line>
                                  <line x1="12" y1="16" x2="12" y2="16"></line>
                                </svg>
                              </a>

                              <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuLink-22"
                              >
                                <a
                                  className="dropdown-item danger"
                                  href="javascript:void(0);"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-alert-octagon"
                                  >
                                    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                    <line
                                      x1="12"
                                      y1="16"
                                      x2="12"
                                      y2="16"
                                    ></line>
                                  </svg>{" "}
                                  High
                                </a>
                                <a
                                  className="dropdown-item warning"
                                  href="javascript:void(0);"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-alert-octagon"
                                  >
                                    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                    <line
                                      x1="12"
                                      y1="16"
                                      x2="12"
                                      y2="16"
                                    ></line>
                                  </svg>{" "}
                                  Middle
                                </a>
                                <a
                                  className="dropdown-item primary"
                                  href="javascript:void(0);"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-alert-octagon"
                                  >
                                    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                    <line
                                      x1="12"
                                      y1="16"
                                      x2="12"
                                      y2="16"
                                    ></line>
                                  </svg>{" "}
                                  Low
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className="action-dropdown custom-dropdown-icon">
                            <div className="dropdown">
                              <a
                                className="dropdown-toggle"
                                href="#"
                                role="button"
                                id="dropdownMenuLink-23"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="true"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  className="feather feather-more-vertical"
                                >
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="12" cy="5" r="1"></circle>
                                  <circle cx="12" cy="19" r="1"></circle>
                                </svg>
                              </a>

                              <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuLink-23"
                              >
                                <a
                                  className="edit dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  Edit
                                </a>
                                <a
                                  className="important dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  Important
                                </a>
                                <a
                                  className="dropdown-item delete"
                                  href="javascript:void(0);"
                                >
                                  Delete
                                </a>
                                <a
                                  className="dropdown-item permanent-delete"
                                  href="javascript:void(0);"
                                >
                                  Permanent Delete
                                </a>
                                <a
                                  className="dropdown-item revive"
                                  href="javascript:void(0);"
                                >
                                  Revive Task
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="modal fade"
                      id="todoShowListItem"
                      tabindex="-1"
                      role="dialog"
                      aria-hidden="true"
                    >
                      <div
                        className="modal-dialog modal-dialog-centered"
                        role="document"
                      >
                        <div className="modal-content">
                          <div className="modal-body">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="feather feather-x close"
                              data-dismiss="modal"
                            >
                              <line x1="18" y1="6" x2="6" y2="18"></line>
                              <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                            <div className="compose-box">
                              <div className="compose-content">
                                <h5 className="task-heading"></h5>
                                <p className="task-text"></p>
                              </div>
                            </div>
                          </div>
                          <div className="modal-footer">
                            <button className="btn" data-dismiss="modal">
                              {" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="feather feather-trash"
                              >
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                              </svg>{" "}
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="modal fade"
                id="addTaskModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="addTaskModalTitle"
                aria-hidden="true"
              >
                <div
                  className="modal-dialog modal-dialog-centered"
                  role="document"
                >
                  <div className="modal-content">
                    <div className="modal-body">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-x close"
                        data-dismiss="modal"
                      >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                      <div className="compose-box">
                        <div className="compose-content" id="addTaskModalTitle">
                          <h5 className="">Add Task</h5>
                          <form>
                            <div className="row">
                              <div className="col-md-12">
                                <div className="d-flex mail-to mb-4">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-edit-3 flaticon-notes"
                                  >
                                    <path d="M12 20h9"></path>
                                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                                  </svg>
                                  <div className="w-100">
                                    <input
                                      id="task"
                                      type="text"
                                      placeholder="Task"
                                      className="form-control"
                                      name="task"
                                    />
                                    <span className="validation-text"></span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="d-flex  mail-subject mb-4">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="feather feather-file-text flaticon-menu-list"
                              >
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                <polyline points="10 9 9 9 8 9"></polyline>
                              </svg>
                              <div className="w-100">
                                <div id="taskdescription" className=""></div>
                                <span className="validation-text"></span>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button className="btn" data-dismiss="modal">
                        <i className="flaticon-cancel-12"></i> Discard
                      </button>
                      <button className="btn add-tsk">Add Task</button>
                      <button className="btn edit-tsk">Save</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Task;
