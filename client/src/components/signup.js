import { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import { useForm } from "../utils/hooks";
import { useMutation } from "@apollo/react-hooks";

import { gql } from "graphql-tag";
import { useNavigate } from "react-router-dom";
